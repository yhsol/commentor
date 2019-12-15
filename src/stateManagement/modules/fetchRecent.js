import Axios from "axios";
import { handleActions } from "redux-actions";

function getRecentAPI() {
  return Axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=fb2398f0003757361045d72497fe13c3"
  );
}
// action type
const FETCH_RECENT_LOADING = "fetch/RECENT_LOADING";
const FETCH_RECENT_SUCCESS = "fetch/RECENT_SUCCESS";
const FETCH_RECENT_ERROR = "fetch/RECENT_ERROR";

// action creator
export const fetchRecent = () => dispatch => {
  dispatch({ type: FETCH_RECENT_LOADING });

  return getRecentAPI()
    .then(response => {
      dispatch({
        type: FETCH_RECENT_SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_RECENT_ERROR,
        payload: error
      });
    });
};

const initialState = {
  loading: false,
  error: false,
  results: []
};

export default handleActions(
  {
    [FETCH_RECENT_LOADING]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false
      };
    },
    [FETCH_RECENT_SUCCESS]: (state, action) => {
      // const { results } = action.payload.data;
      return {
        ...state,
        loading: false,
        results: action.payload.data.results
      };
    },
    [FETCH_RECENT_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  },
  initialState
);
