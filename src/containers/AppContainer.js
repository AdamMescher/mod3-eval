import { connect } from 'react-redux';
import App from '../components/App/App';
import { houseData, swornMembers } from '../actions/AppActions';

export const mapStateToProps = store => ({
  houseData: store.houseData,
  swornMembers: store.swornMembers
});

export const mapDispatchToProps = dispatch => ({
  setHouseData: (houseDataArray) => {
    dispatch( houseData(houseDataArray) )
  },
  setSwornMembers: (people) => {
    dispatch( swornMembers(people) )
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);