import { INewsfeedInitialState } from '..';
import { IGetNewsFeedAction } from 'containers/NewsFeed/actions';

function getNewsFeedTransformer(state: INewsfeedInitialState, action: IGetNewsFeedAction): INewsfeedInitialState {
  return {
    ...state,
    ui: {
      ...state.ui,
      loaded: false
    }
  };
}

export default getNewsFeedTransformer;