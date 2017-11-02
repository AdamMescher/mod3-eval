import * as actions from '../../actions/AppActions';

describe(`APP ACTIONS`, () => {
  it(`should have a test`, () => {
    const mockHouseData = [{ name: 'Stark' }, { name: 'Tully' }, { name: 'Baratheon'}]
    const expectation = actions.houseData(mockHouseData);
    const expected = {
      type: 'SET_HOUSE_DATE_ARRAY', 
      houseData: 
      [
        {name: 'Stark'},
        {name: 'Tully'},
        {name: 'Baratheon'}
      ]
    }
    expect(expectation).toEqual(expected);
  });
});