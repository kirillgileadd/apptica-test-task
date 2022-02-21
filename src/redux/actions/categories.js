import axios from "axios";

export const fetchCategoriesList = () => async (dispatch) => {

    try {
        dispatch(fetchCategories())
        const response = await axios.get(`https://api.apptica.com/v1/applicationCategory?platform=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l`)
        let categoriesList = response.data.data
        let coloredCategoryList = categoriesList.map((item, index) => {
            let [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
            item.backgroundColor = ` rgba(${r},${g},${b}, 0.5 )`
            item.color = ` rgba(${r},${g},${b} )`
            item.categories.map((subItem) => {
                let [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
                subItem.backgroundColor = ` rgba(${r},${g},${b}, 0.5 )`
                subItem.color = ` rgba(${r},${g},${b} )`
                return subItem
            })
            return item
        })
        dispatch(fetchCategoriesSuccess(coloredCategoryList))
    } catch (e) {
        dispatch(fetchCategoriesError)
    }
}

export const fetchCategories = () => ({
    type: 'FETCH_CATEGORIES'

})

export const fetchCategoriesSuccess = (data) => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: data
})

export const fetchCategoriesOriginalsSuccess = (data) => ({
    type: 'FETCH_CATEGORIES_ORIGINALS_SUCCESS',
    payload: data
})


export const fetchCategoriesError = (value) => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: value
})
