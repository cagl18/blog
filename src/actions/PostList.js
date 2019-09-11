import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
  //dispatch - allow us to change any state data we want
  //getState - allow us to get data state data we want
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    //calling the dispatch manually.
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
