import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, onChangeCurrentCountry, onToggleChartVision} from "./redux/actions/canvas";
import Loading from "./components/Loading";
import {Box, Container} from "@mui/material";
import LegendList from "./components/LegendList";
import {useDownload} from "./hooks/useDownload";

export default function App() {
    const dispatch = useDispatch()
    const {country, loading, currentCountry} = useSelector(({canvas}) => canvas)
    const [chartRef, exportPngImage, exportCSV] = useDownload()
    let loaded = !loading && country.hasOwnProperty("id")

    useEffect(() => {
        dispatch(fetchData(currentCountry))
    }, [currentCountry])

    const onChangeCountry = (id) => {
        dispatch(onChangeCurrentCountry(id))
    }

    const onToggleСhart = (value) => {
        dispatch(onToggleChartVision(value))
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <NavBar
                currentCountry={currentCountry}
                onChangeCountry={onChangeCountry}
                data={country}
                exportPngImage={exportPngImage}
                exportCSV={exportCSV}/>
            <Container sx={{m: {xs: 0, sm: 2, maxWidth: "1100px"}}}>
                {
                    loaded ?
                        <>
                            <Canvas
                                chartRef={chartRef}
                                data={country}/>
                            <LegendList
                                legendList={country.datasets}
                                onToggleСhart={onToggleСhart}/>
                        </>
                        :
                        <Loading/>
                }
            </Container>

        </Box>
    )
}
