import NewsFeedConstants from '../constants';

export namespace INewsFeedActions {
  export interface GetNewsFeed extends DonistoAction<
    NewsFeedConstants.GET_NEWS_FEED,
    NewsFeedConstants.GET_NEWS_FEED_FAIL,
    NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
    any[]
  > {}
  export interface UpdateDetailIx {
    WithUuid: {
      type: NewsFeedConstants.UPDATE_DETAIL_IX;
      uuid: string;
    }
  }
  export interface SelectOrgUuid {
    WithUuid: {
      type: NewsFeedConstants.SELECT_ORG_UUID;
      uuid: string;
    }
  }
  export interface ToggleSelectCause {
    WithUuid: {
      type: NewsFeedConstants.TOGGLE_SELECT_CAUSE;
      uuid: string;
    }
  }
  export interface GetNewsItemDetail extends DonistoAction<
    NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
    NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
    NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
    any
  > {
    WithUuid: {
      type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL;
      news_item_uuid: string;
    }
  }
}

export namespace INewsFeedActionCreators {
  export interface GetNewsFeed extends DonistoActionCreators<
    INewsFeedActions.GetNewsFeed['Default'],
    INewsFeedActions.GetNewsFeed['Fail'],
    INewsFeedActions.GetNewsFeed['Success'],
    any[]
  > {}
  export interface UpdateDetailIx {
    WithUuid: (uuid: string) => INewsFeedActions.UpdateDetailIx['WithUuid'];
  }
  export interface SelectOrgUuid {
    WithUuid: (uuid: string) => INewsFeedActions.SelectOrgUuid['WithUuid'];
  }
  export interface ToggleSelectCause {
    WithUuid: (uuid: string) => INewsFeedActions.ToggleSelectCause['WithUuid'];
  }
  export interface GetNewsItemDetail extends DonistoActionCreators<
    INewsFeedActions.GetNewsItemDetail['Default'],
    INewsFeedActions.GetNewsItemDetail['Fail'],
    INewsFeedActions.GetNewsItemDetail['Success'],
    any
  > {
    WithUuid: (news_item_uuid: string) => INewsFeedActions.GetNewsItemDetail['WithUuid'];
  }
}