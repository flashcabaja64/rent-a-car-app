import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
} from "./actionTypes";

export function fetchCarsRequest() {
  return {
    type: FETCH_CARS_REQUEST
  }
};

export function fetchCarsSuccess(cars: {}) {
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