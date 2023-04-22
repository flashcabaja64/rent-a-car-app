let initialState = {
  loading: false,
  cars: [],
  error: null,
  carColors: [],
  carMake: [],
  filteredCars: [],
  searchedText: '',
};

 type reducerAction = {
  type: string;
  cars?: object;
  payload: {
    error?: object | null;
    searchText?: string
  }
 }

function reducer(state = initialState, action: reducerAction) {
  let { cars, carColors, carMake, filteredCars, searchedText } = state;

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
        cars: action.cars
      }
    case "FETCH_CARS_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          cars: []
        }
    case "ASSEMBLE_CAR_FILTERS":
      carColors = cars.reduce((unique, o) => {
        if(!unique.some(obj => obj["car_color"] === o["car_color"])) {
          unique.push(o)
        }  
        return unique
      },[]).map(car => car["car_color"])

      carMake = cars.reduce((unique, o) => {
        if(!unique.some(obj => obj["car"] === o["car"])) {
          unique.push(o)
        }  
        return unique
      },[]).map(car => car["car"])
      return {
        ...state,
        carColors,
        carMake
      }
    case "FILTER_MAKE_MODEL":
      filteredCars = cars.filter(car => {
        if((car.car || car.car_model) === action.payload.searchText) {
          return car
        }

      })
      return {
        ...state,
        loading: false,
        filteredCars
      }
    default:
      return state;
  }
}

export default reducer;