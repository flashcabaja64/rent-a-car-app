import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
  ASSEMBLE_CAR_FILTERS,
  SEARCH_MAKE_MODEL,
  SET_FILTER_COLOR_TEXT,
  SET_FILTER_MAKE_TEXT,
  SET_FILTER_YEAR,
  FILTER_CAR_MAKE_COLOR_YEAR,
  GET_SINGLE_CAR,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "./actionTypes";

export function fetchCarsRequest() {
  return {
    type: FETCH_CARS_REQUEST
  }
};

export function fetchCarsSuccess(cars: unknown) {
  return {
    type: FETCH_CARS_SUCCESS,
    cars
  }
}

export function fetchCarsError(error: {}) {
  return {
    type: FETCH_CARS_ERROR,
    payload: { error }
  }
}

export function assembleCarFilters() {
  return {
    type: ASSEMBLE_CAR_FILTERS
  }
};

export function carsSearchText(searchText: string) {
  return {
    type: SEARCH_MAKE_MODEL,
    payload: { searchText }
  }
}

export function getCar(id: number) {
  return {
    type: GET_SINGLE_CAR,
    payload: { id }
  }
}

export function setFilterColorText(filterColorText: string) {
  return {
    type: SET_FILTER_COLOR_TEXT,
    payload: { filterColorText }
  }
}

export function setFilterMakeText(filterMakeText: string) {
  return {
    type: SET_FILTER_MAKE_TEXT,
    payload: { filterMakeText }
  }
}

export function setFilterYearsArray(filterYears: Array<number>) {
  return {
    type: SET_FILTER_YEAR,
    payload: { filterYears }
  }
}

export function filterAllCars() {
  return {
    type: FILTER_CAR_MAKE_COLOR_YEAR
  }
}

export function addFavorite(favoriteId: number) {
  return {
    type: ADD_FAVORITE,
    payload: { favoriteId }
  }
}

export function removeFavorite(favoriteId: number) {
  return {
    type: REMOVE_FAVORITE,
    payload: { favoriteId }
  }
}