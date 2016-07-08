import { createSelector } from 'reselect';

const selectEntitiesList = () => state => state.get('entitiesList');

const selectError = () => createSelector(
  selectEntitiesList(),
  (substate) => substate.toJS()
);

export default selectError;
export {
  selectEntitiesList,
};
