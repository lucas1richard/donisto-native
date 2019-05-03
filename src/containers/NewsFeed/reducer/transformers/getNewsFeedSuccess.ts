import { INewsfeedInitialState } from '..';
import { IGetNewsFeedSuccessAction } from 'containers/NewsFeed/actions';

function getNewsFeedSuccessTransformer(
  state: INewsfeedInitialState,
  action: IGetNewsFeedSuccessAction
): INewsfeedInitialState {
  const uuid = action.newsfeed.reduce((memo, item) => {
    memo[item.uuid] = item;
    return memo;
  }, {});

  return {
    ...state,
    news: action.newsfeed,
    error: undefined,
    uuid,
    ui: {
      ...state.ui,
      loaded: true
    }
  };
}

export default getNewsFeedSuccessTransformer;