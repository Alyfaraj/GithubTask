import { GET_REPOSITORIES_ERROR, GET_REPOSITORIES_LOADING, GET_REPOSITORIES_SUCCESS } from '../actions/types';

const initialState = {
  error:false,
  loading:false,
  repostories:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repostories: action.payload,
        error:false,
        loading:false
      };
    case GET_REPOSITORIES_LOADING:
        return {
          ...state,
          repostories: [],
          error:false,
          loading:true
        };
    case GET_REPOSITORIES_ERROR:
        return {
           ...state,
           repostories: [],
           error:true,
           loading:false
            };    
    default:
      return state;
  }
};
