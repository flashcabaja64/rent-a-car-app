import { 
  fetchCarsSuccess, 
  fetchCarsRequest, 
  fetchCarsError, 
  assembleCarFilters,
  filterCars 
} from "./actions";
import { DispatchType } from '../types/reduxTypes'

export function fetchCars(endpoint: string) {
  return async (dispatch) => {
    dispatch(fetchCarsRequest());

    fetch(`https://myfakeapi.com/api/cars/${endpoint}`)
      .then(response => {
        if(response.ok) return response.json()
      })
      .then((carsDataObject) => {
        const arrayOfCars = Object.values(carsDataObject)[0];
        dispatch(fetchCarsSuccess(arrayOfCars));
      })
      .catch((error) => fetchCarsError(error))
  }
}

export function filterMakeModel(searchText: string) {
  return async (dispatch) => {
    dispatch(filterCars(searchText));
  }
}

export function getCarMakeColor() {
  return async (dispatch) => {
    dispatch(assembleCarFilters());
  }
}