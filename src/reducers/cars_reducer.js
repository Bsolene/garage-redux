import { SET_CARS, DELETE_CAR, FETCH_CAR } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SET_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case DELETE_CAR:
      return action.payload;
    default:
      return state;
  }
}
