const initialState = {
  loading: false,
  data: [],
  error: "",
};

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STARWARS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_STARWARS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_STARWARS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "CLEAR_STARWARS_DATA":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default starWarsReducer;
