export const houseData = (state = [], action) => {
  switch( action.type ){
    case 'SET_HOUSE_DATE_ARRAY':
      return action.houseData;
    default:
      return state;
  }
}

export const swornMembers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SWORN_MEMBERS_OBJECT':
      return action.swornMembers;
    default:
      return state;
  }
}
