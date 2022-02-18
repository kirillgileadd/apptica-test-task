import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./redux/actions/canvas";
import Loading from "./components/Loading";
import {Box} from "@mui/material";

export default function App() {
  const dispatch = useDispatch()
  const {country, loading, currentCountry} = useSelector(({canvas}) => canvas)
  let loaded = !loading && country.hasOwnProperty("id")

  useEffect(() => {
    dispatch(fetchData(currentCountry))
  }, [currentCountry])

  return (
      <div>
        <NavBar/>
        <Box sx={{ m: {xs: 0, sm: 2}}}>
          {
            loaded ?  <Canvas data={country}/> : <Loading/>
          }
        </Box>
      </div>
  )
}
