const initialState = {
    data: null,
    labels: null,
    loading: false,
    error: null
};

export const canvas = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return {
                ...state,
                loading: true
            };
        }
        case 'FETCH_DATA_SUCCESS': {
            return {
                ...state,
                data: state.data ? [...state.data, ...action.payload] : [...action.payload],
                loading: false
            }
        }
        case "FETCH_DATA_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "CLEAR_DATA": {
            return {
                ...state,
                data: null
            }
        }
        case "TOGGLE_CHART_VISION": {
            let {id, check} = action.payload
            let newDatasets = state.data.map((item) => ({...item, hidden: id === item.id ? check : item.hidden }))
            return {
                ...state,
                data: newDatasets

            }
        }
        default:
            return state;
    }
};