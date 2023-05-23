import { Cars } from '../types/reduxTypes';

let initialState = {
  loading: false,
  cars: [],
  car: [],
  error: null,
  carColors: [],
  carMakes: [],
  filteredCars: [],
  filteredSearchCarsResults: [],
  searchedText: '',
  favorites: [],
  filteredValues: {
    make: 'All Makes',
    color: 'All Colors',
    years: [1920, Number(new Date().getFullYear())]
  }
};

 type reducerAction = {
  type: string;
  cars?: object;
  payload: {
    error?: object;
    searchText?: string;
    make: string | undefined;
    color: string;
    years?: Array<number>;
    filterColorText?: string | undefined;
    filterMakeText?: string | undefined;
    filterYears?: Array<number> | undefined;
    id?: number;
    favoriteId?: number;
  }
 }

function reducer(state = initialState, action: reducerAction) {
  let { cars, favorites, carColors, filteredSearchCarsResults, carMakes, filteredCars, filteredValues, car } = state;

  switch(action.type) {
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      }
    case "FETCH_CARS_SUCCESS":
      filteredSearchCarsResults = action.cars!.slice(1, 50);
      return {
        ...state,
        loading: false,
        cars: action.cars,
        filteredCars: action.cars,
        filteredSearchCarsResults: filteredSearchCarsResults
      }
    case "FETCH_CARS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cars: []
      }
    case "GET_SINGLE_CAR":
      car = cars.filter(item => item["id"] === action.payload.id)

      return {
        ...state,
        car
      }
    case "ASSEMBLE_CAR_FILTERS":
      carColors = cars.reduce((unique, curVal) => {
        if(!unique.some(obj => obj["car_color"] === curVal["car_color"])) {
          unique.push(curVal)
        }  
        return unique
      },[]).map(car => car["car_color"])

      carMakes = cars.reduce((unique, curVal) => {
        if(!unique.some(obj => obj["car"] === curVal["car"])) {
          unique.push(curVal)
        }  
        return unique
      },[]).map(car => car["car"])
      
      return {
        ...state,
        carColors,
        carMakes
      }
    case "ADD_FAVORITE":
      favorites = cars.filter((item:Cars) => {
        if(item.id === action.payload.favoriteId) {
          item['favorite'] = true;
          return favorites.push(item)
        }
      });
      filteredCars = filteredCars.filter((item:Cars) => {
        if(item.id === action.payload.favoriteId) {
          item['favorite'] = true;
        }
        return item
      })
      return {
        ...state,
        ...favorites,
        filteredCars
      }
    case "REMOVE_FAVORITE":
      favorites = favorites.filter((item:Cars) => {
        if(!item) return;
        if(item.id !== action.payload.favoriteId) {
          return item
        }
      });
      filteredCars = filteredCars.filter((item:Cars) => {
        if(item.id === action.payload.favoriteId) {
          delete item['favorite'];
        }
        return item
      })
      return {
        ...state,
        ...favorites,
        filteredCars
      }
    case "SEARCH_MAKE_MODEL":
      filteredSearchCarsResults = cars.filter((car:Cars) => {
        if(
          car.car.toLowerCase().includes(action.payload.searchText!) || 
          car.car_model.toLowerCase().includes(action.payload.searchText!)
        ) {
          return car;
        }
      })
      filteredSearchCarsResults.splice(1, filteredSearchCarsResults.length - 50);
      return {
        ...state,
        loading: false,
        filteredSearchCarsResults
      }
    case "SET_FILTER_MAKE_TEXT":
      filteredValues['make'] = action.payload.filterMakeText!;
      return {
        ...state,
        filteredValues
      }
    case "SET_FILTER_COLOR_TEXT":
      filteredValues['color'] = action.payload.filterColorText!;
      return {
        ...state,
        filteredValues
      }
    case "SET_FILTER_YEAR":
      filteredValues['years'] = action.payload.filterYears!;
      return {
        ...state,
        filteredValues
      }
    case "FILTER_CAR_MAKE_COLOR_YEAR":
      let currentMake = filteredValues['make'] === "All Makes" ? null : filteredValues['make'];
      let currentColor = filteredValues['color'] === "All Colors" ? null : filteredValues['color'];
      
      filteredCars = cars.filter((car: Cars) => {
        if(currentMake && currentColor) {
          return car.car === currentMake && 
            car.car_color === currentColor && 
            car.car_model_year >= filteredValues['years'][0] && 
            car.car_model_year <= filteredValues['years'][1]
        } else if(currentMake && !currentColor) {
          return car.car === currentMake && 
            car.car_model_year >= filteredValues['years'][0] && 
            car.car_model_year <= filteredValues['years'][1]
        } else if(!currentMake && currentColor) {
          return car.car_color === currentColor && 
            car.car_model_year >= filteredValues['years'][0] && 
            car.car_model_year <= filteredValues['years'][1]
        } else if(!currentMake && !currentColor) {
          return car.car_model_year >= filteredValues['years'][0] && 
            car.car_model_year <= filteredValues['years'][1]
        }
      })
      return {
        ...state,
        filteredCars
      }
    default:
      return state;
  }
}

export default reducer;