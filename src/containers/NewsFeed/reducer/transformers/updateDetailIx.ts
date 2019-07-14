import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function updateDetailIxTransformer(state: INewsfeedInitialState, action: INewsFeedActions.UpdateDetailIx['WithUuid']): INewsfeedInitialState {
  return {
    ...state,
    ui: {
      ...state.ui,
      detailIx: action.uuid
    }
  };
}

export default updateDetailIxTransformer;