import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
  ASSEMBLE_CAR_FILTERS,
  FILTER_MAKE_MODEL
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
    type: FILTER_MAKE_MODEL,
    payload: { searchText }
  }
}
