import { createSelector } from 'reselect';

const selectEntitiesList = () => state => state.get('entitiesList');
const selectLoadingDomain = () => createSelector(
  selectEntitiesList(),
  (entitiesList) => entitiesList.get('loading')
)

const selectLoading = () => createSelector(
  selectLoadingDomain(),
  (substate) => {
    return substate.toJS()
  }
);

export default selectLoading;
export {
  selectLoadingDomain,
};
