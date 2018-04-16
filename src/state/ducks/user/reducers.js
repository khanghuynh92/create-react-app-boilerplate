import { GET_USER } from './types';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user ? {
        ...state,
        ...action.user,
      } : null;

    default:
      return state;
  }
};

export default userReducer;
