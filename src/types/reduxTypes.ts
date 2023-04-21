
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

export type CarsObject = {
  [key: string]: [Cars]
}

export type CarsState = {
  cars: CarsObject
}

export type CarsAction = {
  type: string;
  cars: CarsObject
}

export type DispatchType = (args: CarsAction) => CarsAction