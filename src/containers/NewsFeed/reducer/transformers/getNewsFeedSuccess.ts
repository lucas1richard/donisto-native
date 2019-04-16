import { INewsfeedInitialState } from '..';
import { IGetNewsFeedSuccessAction } from 'containers/NewsFeed/actions';

function getNewsFeedSuccessTransformer(state: INewsfeedInitialState, action: IGetNewsFeedSuccessAction): INewsfeedInitialState {
  return {
    ...state,
    news: action.newsfeed,
    error: undefined,
    ui: {
      ...state.ui,
      loaded: true
    }
  };
}

export default getNewsFeedSuccessTransformer;