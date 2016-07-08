import { createSelector } from 'reselect';


const selectEntitiesList = () => state => state.get('entitiesList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Video
 */

const selectCluster = () => createSelector(
  selectEntitiesList(),
  (substate) => substate.toJS()
);

export default selectCluster;
