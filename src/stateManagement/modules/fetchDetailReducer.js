import Axios from "axios";
import { handleActions } from "redux-actions";

function getDetailAPI(id) {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=fb2398f0003757361045d72497fe13c3`
  );
}
// action type
const FETCH_DETAIL_LOADING = "fetch/DETAIL_LOADING";
const FETCH_DETAIL_SUCCESS = "fetch/DETAIL_SUCCESS";
const FETCH_DETAIL_ERROR = "fetch/DETAIL_ERROR";

// action creator
export const fetchDetail = id => dispatch => {
  dispatch({ type: FETCH_DETAIL_LOADING });

  return getDetailAPI(id)
    .then(response => {
      dispatch({
        type: FETCH_DETAIL_SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_DETAIL_ERROR,
        payload: error
      });
    });
};

const initialState = {
  loading: false,
  error: false,
  results: []
};

const fetchDetailReducer = handleActions(
  {
    [FETCH_DETAIL_LOADING]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false
      };
    },
    [FETCH_DETAIL_SUCCESS]: (state, action) => {
      // const { results } = action.payload.data;
      return {
        ...state,
        loading: false,
        results: action.payload.data
      };
    },
    [FETCH_DETAIL_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  },
  initialState
);

export default fetchDetailReducer;
