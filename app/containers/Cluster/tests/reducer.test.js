import expect from 'expect';
import clusterReducer from '../reducer';
import { fromJS } from 'immutable';

describe('clusterReducer', () => {
  it('returns the initial state', () => {
    expect(clusterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
