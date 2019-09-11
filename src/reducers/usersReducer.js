export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      const newState = state.filter(user => user.id !== action.payload.id);
      // console.log('updated reducer state', [...newState, action.payload]);
      return [...newState, action.payload];
    default:
      return state;
  }
};
