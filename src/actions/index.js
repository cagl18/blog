import { fetchPosts } from './PostList';
import { fetchUser } from './UserHeader';
// import _ from 'lodash';

const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('about to fetch posts!');
  await dispatch(fetchPosts()); // when we call an action creator from inside an action creator, we need to make sure we dispatch result of calling the action creator

  const posts = getState().posts; // after the await dispatch(fetchposts) completes, we can access the posts added to redux using getState to get the userIds

  const uniqueUserIds = [...new Set(posts.map(post => post.userId))];
  uniqueUserIds.forEach(userId => dispatch(fetchUser(userId)));

  // const userIds = _.uniq(_.map(posts, 'userId'));

  // _.chain(posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};

export default {
  fetchPosts,
  fetchUser,
  fetchPostsAndUsers
};
