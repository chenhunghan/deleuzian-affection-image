import { createSelector } from 'reselect';

/**
 * Direct selector to the entitiesList state domain
 */
const selectEntitiesListDomain = () => state => state.get('entitiesList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EntitiesList
 */

const selectEntitiesList = () => createSelector(
  selectEntitiesListDomain(),
  (substate) => substate.toJS()
);

const selectCluster = () => createSelector(
  selectEntitiesListDomain(),
  (substate) => substate.toJS()
);

export default selectEntitiesList;
export {
  selectCluster,
  selectEntitiesListDomain,
};
