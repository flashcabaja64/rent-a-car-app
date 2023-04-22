import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
  ASSEMBLE_CAR_FILTERS,
  SEARCH_MAKE_MODEL,
  FILTER_CAR_MAKE,
  FILTER_CAR_COLOR,
  FILTER_CAR_YEARS
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