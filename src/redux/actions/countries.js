import axios from "axios";

export const fetchCountriesList = () => async (dispatch) => {
    try {
        dispatch(fetchCountries())
        const response = await axios.get(`https://api.apptica.com/v1/geo?B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l`)
        const countriesList = response.data.data
        const countriesSortList = countriesList.sort((a, b) => a.country > b.country ? 1 : -1);
        dispatch(fetchCountriesSuccess(countriesSortList))
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