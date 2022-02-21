const initialState = {
    categories: null,
    categoriesOriginals: null,
    legendList: null,
    loading: false,
    error: null
};

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES': {
            return {
                ...state,
                loading: true
            };
        }
        case 'FETCH_CATEGORIES_SUCCESS': {
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        }
        case 'FETCH_CATEGORIES_ORIGINALS_SUCCESS': {
            return {
                ...state,
                categoriesOriginals: action.payload,
            }
        }
        case 'FETCH_LEGENDS_SUCCESS': {
            return {
                ...state,
                legendList: action.payload
            }
        }
        case "FETCH_CATEGORIES_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
};