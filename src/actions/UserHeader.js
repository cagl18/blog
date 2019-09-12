// import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

// using memoization to fetch users only one time
export const fetchUser = userId => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  };
};

// // using memoization to fetch users only one time. downside, cannot get an updated version of user object
// export const fetchUser = userId => dispatch => {
//   _fetchUser(userId, dispatch);
// };

// const _fetchUser = _.memoize(async (userId, dispatch, getState) => {
//   const response = await jsonPlaceHolder.get(`/users/${userId}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
