import { fetchCarsSuccess, fetchCarsRequest, fetchCarsError } from "./actions";
import { DispatchType } from '../types/reduxTypes'

export function fetchCars(endpoint: string) {
  return async (dispatch) => {
    dispatch(fetchCarsRequest());

    try {
      const response = await fetch(`https://myfakeapi.com/api/cars/${endpoint}`, {
        method: "GET"
      });
      const data = await response.json();
      dispatch(fetchCarsSuccess(data))
    } catch(error: any) {
      dispatch(fetchCarsError(error))
    } 
  }
}