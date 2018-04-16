import { $get, $post, $delete } from "./base";

const PATH = "users";

const getList = async () => {

  const promise = new Promise((resolve, reject) => {
    const res = [{
      id: 1,
      name: 'User 1',
      description: 'User description 1',
    }, {
      id: 2,
      name: 'User 2',
      description: 'User description 2'
    }];

    resolve(res)
  });

  return promise;
};

export { getList };
