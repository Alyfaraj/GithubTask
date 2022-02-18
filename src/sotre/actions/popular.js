import { axiosApi } from "../../api"
import { GET_POPULAR_ERROR, GET_POPULAR_LOADING, GET_POPULAR_SUCCESS } from "./types"

// count is param for top 10,50 or 100 Popular repo 
export const getPopular = (count) => {
    return dispatch => {
        dispatch({ type: GET_POPULAR_LOADING })
        axiosApi.get(`/search/repositories?q=stars&sort=stars&per_page=${count}`)
            .then(response => {
                console.log(response.data.items[0])
                dispatch({ type: GET_POPULAR_SUCCESS, payload: response.data.items })

            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_POPULAR_ERROR })

            })
    }
}