import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchUser = userId => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  };
};
