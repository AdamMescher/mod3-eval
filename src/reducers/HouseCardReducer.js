export const swornMembers = (state = [], action) => {
  switch (action.type) {
    case 'SET_SWORN_MEMBERS_ARRAY':
      return [...state, action.people];
    default:
      return state;
  }
}