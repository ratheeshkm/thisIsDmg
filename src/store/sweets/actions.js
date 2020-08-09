import * as sweetConstants from "./constants";

export const getChocolateData = () => ({
  type: sweetConstants.GET_CHOCOLATE_DATA,
  payload: null
});

export const getChocolateDataSuccess = (chocolate) => ({
  type: sweetConstants.GET_CHOCOLATE_DATA_SUCCESS,
  payload: chocolate
});

export const getChocolateDataFailure = (error: string) => ({
  type: sweetConstants.GET_CHOCOLATE_DATA_FAILURE,
  payload: error
});

export const getCandyData = () => ({
  type: sweetConstants.GET_CANDY_DATA,
  payload: null
});

export const getCandyDataSuccess = (candy) => ({
  type: sweetConstants.GET_CANDY_DATA_SUCCESS,
  payload: candy
});

export const getCandyDataFailure = (error: string) => ({
  type: sweetConstants.GET_CANDY_DATA_FAILURE,
  payload: error
});

export const getToffeeData = () => ({
  type: sweetConstants.GET_TOFFEE_DATA,
  payload: null
});

export const getToffeeDataSuccess = (toffee) => ({
  type: sweetConstants.GET_TOFFEE_DATA_SUCCESS,
  payload: toffee
});

export const getToffeeDataFailure = (error: string) => ({
  type: sweetConstants.GET_TOFFEE_DATA_FAILURE,
  payload: error
});
