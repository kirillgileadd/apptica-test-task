import axios from "axios";



export const fetchData = (currentCountry = 1) => async (dispatch) => {
    try {
        dispatch(fetchCountries())
        let response = await axios.get(`http://localhost:3001/countries/${currentCountry}`)
        dispatch(fetchCountriesSuccess(response.data))
    } catch (e) {
        dispatch(fetchCountriesError)
    }
}

export const fetchCountries = () => ({
    type: 'FETCH_COUNTRIES'

})

export const fetchCountriesSuccess = (data) => ({
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: data
})

export const fetchCountriesError = (value) => ({
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: value
})

export const onChangeCurrentCountry = (value) => ({
    type: 'CHANGE_CURRENT_COUNTRY',
    payload: value
})