import Axios from "axios";
import { handleActions } from "redux-actions";

function getPopularAPI() {
  return Axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=fb2398f0003757361045d72497fe13c3"
  );
}
// action type
const FETCH_POPULAR_LOADING = "fetch/POPULAR_LOADING";
const FETCH_POPULAR_SUCCESS = "fetch/POPULAR_SUCCESS";
const FETCH_POPULAR_ERROR = "fetch/POPULAR_ERROR";

// action creator
export const fetchPopular = () => dispatch => {
  dispatch({ type: FETCH_POPULAR_LOADING });

  return getPopularAPI()
    .then(response => {
      dispatch({
        type: FETCH_POPULAR_SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_POPULAR_ERROR,
        payload: error
      });
    });
};

const initialState = {
  loading: false,
  error: false,
  results: []
};

const fetchPopularReducer = handleActions(
  {
    [FETCH_POPULAR_LOADING]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false
      };
    },
    [FETCH_POPULAR_SUCCESS]: (state, action) => {
      // const { results } = action.payload.data;
      return {
        ...state,
        loading: false,
        results: action.payload.data.results
      };
    },
    [FETCH_POPULAR_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  },
  initialState
);

export default fetchPopularReducer;
