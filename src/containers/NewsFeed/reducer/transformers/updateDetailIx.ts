import { INewsfeedInitialState } from '..';
import { IUpdateDetailIxAction } from 'containers/NewsFeed/actions';

function updateDetailIxTransformer(state: INewsfeedInitialState, action: IUpdateDetailIxAction): INewsfeedInitialState {
  return {
    ...state,
    ui: {
      ...state.ui,
      detailIx: action.detailIx
    }
  };
}

export default updateDetailIxTransformer;