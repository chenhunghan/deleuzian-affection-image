import expect from 'expect';
import loadingReducer from '../reducer';
import { fromJS } from 'immutable';

describe('loadingReducer', () => {
  it('returns the initial state', () => {
    expect(loadingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
