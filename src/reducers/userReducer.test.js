import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  it('Should return the default state', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should be able to add a user on LOGIN_USER action', () => {
    const expected = { name: 'Taylor', email: 'tman2272@aol.com', password: 'guest'};
    const result = userReducer(undefined, actions.loginUser(expected));
    expect(result).toEqual(expected);
  });

  it('Should return an empty object on SIGN_OUT', () => {
    const expected = {};
    const previousState = { name: 'Taylor', email: 'tman2272@aol.com', password: 'guest'};
    const result = userReducer(previousState, actions.signoutUser());
    expect(result).toEqual(expected);
  });
});