export interface Cars {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
  favorite?: boolean;
}

type filterValuesObject = {
  make: string;
  color: string;
  years: Array<number>
}

export type CarsState = {
  carsData : {
    favorites: any;
    carColors: string[];
    carMakes: string[];
    cars: Cars[];
    car: Cars[];
    error: null | object | string;
    loading: boolean;
    filteredCars: Cars[];
    filteredValues: filterValuesObject;
    filteredSearchCarsResults: Cars[];
  }
}

export type CarsAction = {
  type: string;
}

export type DispatchType = (args: CarsAction) => CarsAction