import expect from 'expect';
import videoReducer from '../reducer';
import { fromJS } from 'immutable';

describe('videoReducer', () => {
  it('returns the initial state', () => {
    expect(videoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
