import { INewsfeedInitialState } from '..';
import { IGetNewsFeedFailAction } from 'containers/NewsFeed/actions';

function getNewsFeedFailTransformer(state: INewsfeedInitialState, action: IGetNewsFeedFailAction): INewsfeedInitialState {
  return {
    ...state,
    error: action.error,
    ui: {
      ...state.ui,
      loaded: true
    }
  };
}

export default getNewsFeedFailTransformer;