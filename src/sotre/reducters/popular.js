import { GET_POPULAR_ERROR, GET_POPULAR_LOADING, GET_POPULAR_SUCCESS } from '../actions/types';

const initialState = {
  error:false,
  loading:false,
  repostories:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        repostories: action.payload,
        error:false,
        loading:false
      };
    case GET_POPULAR_LOADING:
        return {
          ...state,
          repostories: [],
          error:false,
          loading:true
        };
    case GET_POPULAR_ERROR:
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
