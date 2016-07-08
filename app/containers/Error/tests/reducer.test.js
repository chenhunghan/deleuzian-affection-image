import expect from 'expect';
import errorReducer from '../reducer';
import { fromJS } from 'immutable';

describe('errorReducer', () => {
  it('returns the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
