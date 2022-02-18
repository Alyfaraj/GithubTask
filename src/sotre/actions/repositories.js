import moment from "moment"
import { axiosApi } from "../../api"
import { GET_REPOSITORIES_ERROR, GET_REPOSITORIES_LOADING, GET_REPOSITORIES_SUCCESS } from "./types"

export const getRepositories = (language,date) => {
    return dispatch => {
        const dateFormat=moment(date).format('DD-M-yyyy')
        dispatch({ type: GET_REPOSITORIES_LOADING })
        axiosApi.get(`/search/repositories?q=${language}&created:>${dateFormat}&order=desc.`)
            .then(response => {
                console.log(response.data.items[0])
                dispatch({ type: GET_REPOSITORIES_SUCCESS, payload: response.data.items })

            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_REPOSITORIES_ERROR })

            })
    }
}