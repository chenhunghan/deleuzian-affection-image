import { createSelector } from 'reselect';

const selectEntitiesList = () => state => state.get('entitiesList');
const selectVideoDomain = () => createSelector(
  selectEntitiesList(),
  (entitiesList) => entitiesList.get('highlightEntity')
)
/**
 * Other specific selectors
 */


/**
 * Default selector used by Video
 */

const selectVideo = () => createSelector(
  selectVideoDomain(),
  (substate) => substate
);

export default selectVideo;
export {
  selectVideoDomain,
};
