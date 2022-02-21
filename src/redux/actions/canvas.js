import axios from "axios";
import {fetchCategoriesOriginalsSuccess} from "./categories";
import nextId from "react-id-generator";

export const fetchData = (currentCountry = 1, mainCategories, subcategories) => async (dispatch) => {
    try {
        dispatch(fetchDataAction())
        const response = await axios.get(`https://api.apptica.com/package/top_history/9379/${currentCountry}?date_from=2022-02-01&date_to=2022-02-17&platforms=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l`)
        let data = response.data.data
        let dataArr = []
        let labels = null
        let categories = []
        for (let categoryId in data) {
            for (let subCategoryId in data[categoryId]) {
                labels = Object.keys(data[categoryId][subCategoryId]);
                let currentMainCategory = getCategoryObj(categoryId, mainCategories)
                let subcategory = subcategories.find(item => item.id === Number(subCategoryId))?.name
                let chart = {
                    id: nextId(),
                    backgroundColor: currentMainCategory?.backgroundColor,
                    borderColor: currentMainCategory?.color,
                    label: `${currentMainCategory?.name || 'No Category'} - ${subcategory}`,
                    data: data[categoryId][subCategoryId]
                }
                categories.push(currentMainCategory)
                dataArr.push(chart)
            }
        }
        dispatch(fetchCategoriesOriginalsSuccess(categories))
        dispatch(fetchDataSuccess(dataArr))
    } catch (e) {
        dispatch(fetchDataError)
    }
}

const getCategoryObj = (categoryId, mainCategories) => {
    let result = null
    for (let mainCategory of mainCategories) {
        if (categoryId == mainCategory.id) {
            result = mainCategory
            break
        }
        for (let category of mainCategory.categories) {

            if (categoryId == category.id) {
                result = category
                break
            }
        }
    }
    return result
}


export const fetchDataAction = () => ({
    type: 'FETCH_DATA'
})

export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data
})

export const fetchDataError = (value) => ({
    type: 'FETCH_DATA_ERROR',
    payload: value
})

export const clearData = () => ({
    type: 'CLEAR_DATA',
})

export const onToggleChartVision = (value) => ({
    type: 'TOGGLE_CHART_VISION',
    payload: value
})