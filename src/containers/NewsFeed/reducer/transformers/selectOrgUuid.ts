import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function selectOrgUuidTransformer(state: INewsfeedInitialState, action: INewsFeedActions.SelectOrgUuid['WithUuid']): INewsfeedInitialState {
  return {
    ...state,
    selectedOrgUuid: action.uuid,
  };
}

export default selectOrgUuidTransformer;