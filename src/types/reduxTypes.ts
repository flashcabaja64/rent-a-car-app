export interface Cars {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
}

export type CarsState = {
  carsData : {
    carColors: string[];
    carMake: string[];
    cars: object[];
    error: null | object | string;
    loading: boolean;
  }
}

export type CarsAction = {
  type: string;
  cars: Cars[]
}

export type DispatchType = (args: CarsAction) => CarsAction