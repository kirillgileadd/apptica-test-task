const initialState = {
    country: {},
    currentCountry: 1,
    loading: false,
    error: null
};

export const canvas = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES': {
            return {
                ...state,
                loading: true
            };
        }
        case 'FETCH_COUNTRIES_SUCCESS': {
            return {
                ...state,
                country: action.payload,
                loading: false
            }
        }
        case "FETCH_COUNTRIES_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "CHANGE_CURRENT_COUNTRY": {
            return {
                ...state,
                currentCountry: action.payload
            }
        }
        case "TOGGLE_CHART_VISION": {
            let {id, check} = action.payload
            let newDatasets = state.country.datasets.map((item) => ({...item, hidden: id === item.id ? check : item.hidden }))
            return {
                ...state,
                country: {
                    ...state.country,
                    datasets: newDatasets
                }

            }
        }
        default:
            return state;
    }
};