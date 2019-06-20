import { INewsfeedInitialState } from '..';
import { ISelectOrgUuidAction } from 'containers/NewsFeed/actions';

function selectOrgUuidTransformer(state: INewsfeedInitialState, action: ISelectOrgUuidAction): INewsfeedInitialState {
  return {
    ...state,
    selectedOrgUuid: action.uuid,
  };
}

export default selectOrgUuidTransformer;