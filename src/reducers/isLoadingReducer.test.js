import isLoadingReducer from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  it('Should return the default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should return the state with a new error message', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, actions.isLoading(true));
    expect(result).toEqual(expected);
  });

  it('Should be able to update state', () => {
    const previousState = true;
    const expected = false;
    const result = isLoadingReducer(previousState, actions.isLoading(false));
    expect(result).toEqual(expected);
  });
});