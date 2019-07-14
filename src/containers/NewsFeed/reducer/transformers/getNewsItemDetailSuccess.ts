import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function getNewsItemDetailSuccessTransformer(
  state: INewsfeedInitialState,
  action: INewsFeedActions.GetNewsItemDetail['Success']
): INewsfeedInitialState {
  const uuid = {
    ...state.uuid,
    [action.data.uuid]: {
      ...action.data,
      detailFetched: true,
    }
  };

  return {
    ...state,
    error: undefined,
    uuid,
    ui: {
      ...state.ui,
      loaded: true
    }
  };
}

export default getNewsItemDetailSuccessTransformer;