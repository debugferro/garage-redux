import { FETCH_CARS } from '../actions';
import { FETCH_CAR } from '../actions';
import { DELETE_CAR } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [ action.payload ];
    case DELETE_CAR:
      return state;
    default:
      return state;
  }
}
