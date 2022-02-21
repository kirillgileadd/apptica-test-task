import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import {useDispatch, useSelector} from "react-redux";
import {clearData, fetchData, onToggleChartVision} from "./redux/actions/canvas";
import Loading from "./components/Loading";
import {Box, Container} from "@mui/material";
import LegendList from "./components/LegendList";
import {useDownload} from "./hooks/useDownload";
import {fetchCountriesList, onChangeCurrentCountry} from "./redux/actions/countries";
import {fetchCategoriesList} from "./redux/actions/categories";
import NoData from "./components/NoData";

let subCategories = [
    {id: 1, name: 'Top Free'},
    {id: 2, name: 'Top Paid'},
    {id: 3, name: 'Top Grossing'},
    {id: 4, name: 'Top Free'},
    {id: 5, name: 'Top Paid'},
    {id: 6, name: 'Top Grossing'},
    {id: 7, name: 'New Paid'},
    {id: 8, name: 'Top Free'},
    {id: 9, name: 'Trending'},
]

export default function App() {
    const dispatch = useDispatch()
    const {countries, loading, currentCountry} = useSelector(({countries}) => countries)
    const {data} = useSelector(({canvas}) => canvas)
    const {categories} = useSelector(({categories}) => categories)
    const {categoriesOriginals} = useSelector(({categories}) => categories)
    const loadingCat = useSelector(({categories}) => categories.loading)
    const [chartRef, exportPngImage, exportCSV] = useDownload()

    useEffect(() => {
        dispatch(fetchCountriesList())
        dispatch(fetchCategoriesList())
    }, [])

    useEffect(() => {
        dispatch(clearData())
        if (categories) {
            dispatch(fetchData(currentCountry, categories, subCategories))
        }
    }, [currentCountry, categories])

    const onChangeCountry = (id) => {
        dispatch(onChangeCurrentCountry(id))
    }

    const onToggleСhart = (value) => {
        dispatch(onToggleChartVision(value))
    }

    if (!countries) {
        return <Loading/>
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {
                countries && !loading
                    ?
                    <NavBar
                        currentCountry={currentCountry}
                        onChangeCountry={onChangeCountry}
                        countries={countries}
                        data={data}
                        exportPngImage={exportPngImage}
                    />
                    :
                    <Loading/>
            }
            <Container sx={{m: {xs: 0, sm: 2}, maxWidth: "1100px", p: 0}}>
                {
                    data && !loadingCat ?
                        <>
                            {
                                data.length === 0
                                    ?
                                    <NoData/>
                                    :
                                    <Canvas
                                        chartRef={chartRef}
                                        data={data}/>}
                            <LegendList
                                legendList={data}
                                onToggleСhart={onToggleСhart}
                            />
                        </>
                        :
                        <Loading/>
                }
            </Container>

        </Box>
    )
}
