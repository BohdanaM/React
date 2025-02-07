import axios from "axios";

export const fetchStarWarsData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_STARWARS_REQUEST" });

    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      dispatch({
        type: "FETCH_STARWARS_SUCCESS",
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_STARWARS_FAILURE",
        error: error.message,
      });
    }
  };
};

export const clearStarWarsData = () => {
  return {
    type: "CLEAR_STARWARS_DATA",
  };
};
