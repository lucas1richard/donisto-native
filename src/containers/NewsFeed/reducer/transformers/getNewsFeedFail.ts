import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function getNewsFeedFailTransformer(state: INewsfeedInitialState, action: INewsFeedActions.GetNewsFeed['Fail']): INewsfeedInitialState {
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