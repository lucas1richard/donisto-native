import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function getNewsFeedSuccessTransformer(
  state: INewsfeedInitialState,
  action: INewsFeedActions.GetNewsFeed['Success']
): INewsfeedInitialState {
  const uuid = action.data.reduce((memo, item) => {
    memo[item.uuid] = item;
    return memo;
  }, {});

  return {
    ...state,
    news: action.data,
    error: undefined,
    uuid,
    ui: {
      ...state.ui,
      loaded: true
    }
  };
}

export default getNewsFeedSuccessTransformer;