import { GET_USER} from './types';
import { User } from '../../../api';

const getUsers = () => async (dispatch) => {
  const user = await User.getUsers();

  dispatch({
    type: GET_USER,
    user,
  });
};

export {
  getUsers,
};
