let initialState = {
  loading: false,
  cars: [],
  error: null,
  carColors: [],
  carMakes: [],
  filteredCars: [],
  searchedText: '',
};

 type reducerAction = {
  type: string;
  cars?: object;
  payload: {
    error?: object | null;
    searchText?: string;
    make?: string;
    color?: string;
    years?: Array<number> | undefined
  }
 }

function reducer(state = initialState, action: reducerAction) {
  let { cars, carColors, carMakes, filteredCars } = state;

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
        cars: action.cars,
        filteredCars: action.cars
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

      carMakes = cars.reduce((unique, o) => {
        if(!unique.some(obj => obj["car"] === o["car"])) {
          unique.push(o)
        }  
        return unique
      },[]).map(car => car["car"])
      
      return {
        ...state,
        carColors,
        carMakes
      }
    case "SEARCH_MAKE_MODEL":
      filteredCars = cars.filter(car => {
        if((car['car'] || car['car_model']) === action.payload.searchText) {
          return cars
        }

      })
      return {
        ...state,
        loading: false,
        filteredCars
      }
    case "FILTER_CAR_MAKE":
      filteredCars = cars.filter(car => {
        if(action.payload.make === 'All Makes') {
          return filteredCars
        } else {
          return car['car_model'] === action.payload.make
        }
      })
      return {
        ...state,
        loading: false,
        filteredCars
      }
    case "FILTER_CAR_COLOR":
      filteredCars = cars.filter(car => {
        if(action.payload.make === 'All Colors') {
          return filteredCars
        } else {
          return car['car_color'] === action.payload.color
        }
      })
      return {
        ...state,
        loading: false,
        filteredCars
      }
      case "FILTER_CAR_YEARS":
        filteredCars = cars.filter(car => {
          return car['car_model_year'] >= action.payload.years[0] && car['car_model_year'] <= action.payload.years[1]
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