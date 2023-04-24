import { 
  fetchCarsSuccess, 
  fetchCarsRequest, 
  fetchCarsError, 
  assembleCarFilters,
  carsSearchText,
  setFilterColorText,
  setFilterMakeText,
  setFilterYearsArray,
  filterAllCars,
  getCar,
  addFavorite,
  removeFavorite
} from "./actions";
import { DispatchType } from '../types/reduxTypes'

export function fetchCars(endpoint: string) {
  return async (dispatch: DispatchType) => {
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

export function getSingleCar(id: number) {
  return (dispatch: DispatchType) => {
    dispatch(getCar(id))
  }
}

export function searchMakeModel(searchText: string) {
  return async (dispatch: DispatchType) => {
    dispatch(carsSearchText(searchText));
  }
}

export function getCarMakeColor() {
  return (dispatch: DispatchType) => {
    dispatch(assembleCarFilters());
  }
}

export function setFilterColor(value: string) {
  return (dispatch: DispatchType) => {
    dispatch(setFilterColorText(value));
  }
}

export function setFilterMake(value: string) {
  return (dispatch: DispatchType) => {
    dispatch(setFilterMakeText(value));
  }
}

export function setFilterYear(value: Array<number>) {
  return (dispatch: DispatchType) => {
    dispatch(setFilterYearsArray(value));
  }
}

export function filterAllFilteredCars() {
  return (dispatch: DispatchType) => {
    dispatch(filterAllCars());
  }
}

export function addFavoriteCar(id: number) {
  return (dispatch: DispatchType) => {
    dispatch(addFavorite(id));
  }
}

export function removeFavoriteCar(id: number) {
  return (dispatch: DispatchType) => {
    dispatch(removeFavorite(id));
  }
}