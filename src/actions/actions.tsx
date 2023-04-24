import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
  ASSEMBLE_CAR_FILTERS,
  SEARCH_MAKE_MODEL,
  FILTER_CAR_MAKE,
  FILTER_CAR_COLOR,
  FILTER_CAR_YEARS,
  SET_FILTER_COLOR_TEXT,
  SET_FILTER_MAKE_TEXT,
  SET_FILTER_YEAR
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

export function filterCars(searchText: string) {
  return {
    type: SEARCH_MAKE_MODEL,
    payload: { searchText }
  }
}

export function filterCarMake(make: string) {
  return {
    type: FILTER_CAR_MAKE,
    payload: { make }
  }
}

export function filterCarColor(color: string) {
  return {
    type: FILTER_CAR_COLOR,
    payload: { color }
  }
}

export function filterCarYears(years: Array<number>) {
  return {
    type: FILTER_CAR_YEARS,
    payload: { years }
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