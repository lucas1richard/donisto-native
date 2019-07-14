import NewsFeedConstants from "./constants";
import { INewsFeedActionCreators, INewsFeedActions } from './types/actions';

export type TNewsFeedActions =
  INewsFeedActions.GetNewsFeed['Default']
  | INewsFeedActions.GetNewsFeed['Fail']
  | INewsFeedActions.GetNewsFeed['Success']
  | INewsFeedActions.UpdateDetailIx['WithUuid']
  | INewsFeedActions.SelectOrgUuid['WithUuid']
  | INewsFeedActions.ToggleSelectCause['WithUuid']
  | INewsFeedActions.GetNewsItemDetail['WithUuid']
  | INewsFeedActions.GetNewsItemDetail['Default']
  | INewsFeedActions.GetNewsItemDetail['Fail']
  | INewsFeedActions.GetNewsItemDetail['Success']
;

export const getNewsFeedAction: INewsFeedActionCreators.GetNewsFeed = {
  Default: () => ({
    type: NewsFeedConstants.GET_NEWS_FEED
  }),
  Fail: (error) => ({
    type: NewsFeedConstants.GET_NEWS_FEED_FAIL,
    error
  }),
  Success: (data) => ({
    type: NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
    data
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const updateDetailIxAction: INewsFeedActionCreators.UpdateDetailIx = {
  WithUuid: (uuid) => ({
    type: NewsFeedConstants.UPDATE_DETAIL_IX,
    uuid
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectOrgUuidAction: INewsFeedActionCreators.SelectOrgUuid = {
  WithUuid: (uuid) => ({
    type: NewsFeedConstants.SELECT_ORG_UUID,
    uuid
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const toggleSelectCauseAction: INewsFeedActionCreators.ToggleSelectCause = {
  WithUuid: (uuid) => ({
    type: NewsFeedConstants.TOGGLE_SELECT_CAUSE,
    uuid
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getNewsItemDetailAction: INewsFeedActionCreators.GetNewsItemDetail = {
  WithUuid: (news_item_uuid) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
    news_item_uuid
  }),
  Default: () => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
  }),
  Fail: (error) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
    error
  }),
  Success: (data) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
    data
  })
};
