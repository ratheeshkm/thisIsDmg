import * as sweetConstants from "./constants";

export const INIT_STATE = {
  chocolate: {
    loading: false,
    error: null,
    result: []
  },
  candy: {
    loading: false,
    error: null,
    result: []
  },
  toffee: {
    loading: false,
    error: null,
    result: []
  }
};

const Sweets = (state: State = INIT_STATE, action: actionProps) => {
  switch (action.type) {
    case sweetConstants.GET_CHOCOLATE_DATA:
      return {
        ...state,
        chocolate: {
          loading: true,
          error: null,
          result: []
        }
      };
    case sweetConstants.GET_CHOCOLATE_DATA_SUCCESS:
      return {
        ...state,
        chocolate: {
          loading: false,
          error: null,
          result: action.payload
        }
      };
    case sweetConstants.GET_CHOCOLATE_DATA_FAILURE:
      return {
        ...state,
        chocolate: {
          loading: false,
          error: action.payload,
          result: []
        }
      };
    case sweetConstants.GET_CANDY_DATA:
      return {
        ...state,
        candy: {
          loading: true,
          error: null,
          result: []
        }
      };
    case sweetConstants.GET_CANDY_DATA_SUCCESS:
      return {
        ...state,
        candy: {
          loading: false,
          error: null,
          result: action.payload
        }
      };
    case sweetConstants.GET_CANDY_DATA_FAILURE:
      return {
        ...state,
        candy: {
          loading: false,
          error: action.payload,
          result: []
        }
      };
    case sweetConstants.GET_TOFFEE_DATA:
      return {
        ...state,
        toffee: {
          loading: true,
          error: null,
          result: []
        }
      };
    case sweetConstants.GET_TOFFEE_DATA_SUCCESS:
      return {
        ...state,
        toffee: {
          loading: false,
          error: null,
          result: action.payload
        }
      };
    case sweetConstants.GET_TOFFEE_DATA_FAILURE:
      return {
        ...state,
        toffee: {
          loading: false,
          error: action.payload,
          result: []
        }
      };
    default:
      return state;
  }
};

export default Sweets;
