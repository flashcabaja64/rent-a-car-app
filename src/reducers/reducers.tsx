let initialState = {
  loading: false,
  cars: null,
  error: null
};

// FETCH_CARS_REQUEST,
  //FETCH_CARS_SUCCESS,
 // FETCH_CARS_ERROR,

 type reducerAction = {
  type: string;
  cars: object
 }

function reducer(state = initialState, action: reducerAction) {
  switch(action.type) {
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      }
    case "FETCH_CARS_SUCCESS":
        return {
          ...state,
          loading: false,
          cars: Object.values(action.cars)[0]
        }
    default:
      return state;
  }
}

export default reducer;