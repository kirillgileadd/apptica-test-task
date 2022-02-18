import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, onChangeCurrentCountry, onToggleChartAction, onToggleChartVision} from "./redux/actions/canvas";
import Loading from "./components/Loading";
import {Box} from "@mui/material";
import LegendList from "./components/LegendList";

export default function App() {
    const dispatch = useDispatch()
    const {country, loading, currentCountry} = useSelector(({canvas}) => canvas)
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
        <div>
            <NavBar onChangeCountry={onChangeCountry}/>
            <Box sx={{m: {xs: 0, sm: 2}}}>
                {
                    loaded ?
                        <>
                            <Canvas data={country}/>
                            <LegendList legendList={country.datasets} onToggleСhart={onToggleСhart}/>
                        </>
                        :
                        <Loading/>
                }
            </Box>

        </div>
    )
}
