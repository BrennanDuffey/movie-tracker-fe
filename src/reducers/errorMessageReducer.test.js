import errorMessageReducer from './errorMessageReducer';
import * as actions from '../actions';

describe('errorMessageReducer', () => {
  it('Should return the default state', () => {
    const expected = '';
    const result = errorMessageReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should return the state with a new error message', () => {
    const expected = 'I LOVE TESTING';
    const result = errorMessageReducer(undefined, actions.errorMessage('I LOVE TESTING'));
    expect(result).toEqual(expected);
  });

  it('Should be able to update state', () => {
    const previousState = 'I LOVE TESTING';
    const expected = 'JK I REALLY LOVE TESTING';
    const result = errorMessageReducer(previousState, actions.errorMessage('JK I REALLY LOVE TESTING'));
    expect(result).toEqual(expected);
  });
});