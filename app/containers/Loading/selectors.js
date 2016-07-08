import { createSelector } from 'reselect';

const selectEntitiesList = () => state => state.get('entitiesList');
const selectLoadingDomain = () => createSelector(
  selectEntitiesList(),
  (entitiesList) => entitiesList.get('loading')
)

const selectLoading = () => createSelector(
  selectLoadingDomain(),
  (substate) => {
    console.log(substate.toJS())
    return substate.toJS()
  }
);

export default selectLoading;
export {
  selectLoadingDomain,
};
