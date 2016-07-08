import expect from 'expect';
import imageSequenceReducer from '../reducer';
import { fromJS } from 'immutable';

describe('imageSequenceReducer', () => {
  it('returns the initial state', () => {
    expect(imageSequenceReducer(undefined, {})).toEqual(fromJS({}));
  });
});
