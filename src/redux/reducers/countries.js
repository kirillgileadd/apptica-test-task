const initialState = {
    countries: null,
    currentCountry: 1,
    loading: false,
    error: null
};

export const countries = (state = initialState, action) => {
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
                countries: action.payload,
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
        default:
            return state;
    }
};