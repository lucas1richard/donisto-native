import { INewsfeedInitialState } from '..';

function getNewsFeedTransformer(state: INewsfeedInitialState): INewsfeedInitialState {
  return {
    ...state,
    ui: {
      ...state.ui,
      loaded: false
    }
  };
}

export default getNewsFeedTransformer;