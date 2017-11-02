import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseData, swornMembers } from './AppReducer';

const rootReducer = combineReducers({
  fake,
  houseData,
  swornMembers
});


export default rootReducer;
