import { INewsfeedInitialState } from '..';
import { IGetNewsItemDetailSuccessAction } from 'containers/NewsFeed/actions';

function getNewsItemDetailSuccessTransformer(
  state: INewsfeedInitialState,
  action: IGetNewsItemDetailSuccessAction
): INewsfeedInitialState {
  const uuid = {
    ...state.uuid,
    [action.news_item.uuid]: {
      ...action.news_item,
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