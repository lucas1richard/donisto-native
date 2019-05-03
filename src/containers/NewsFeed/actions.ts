import NewsFeedConstants from "./constants";
import { Action } from "redux";

export type TNewsFeedActions =
  IGetNewsFeedAction
  | IGetNewsFeedSuccessAction
  | IGetNewsFeedFailAction
  | IUpdateDetailIxAction
  | IToggleSelectCauseAction
  | IGetNewsItemDetailAction
  | IGetNewsItemDetailSuccessAction
  | IGetNewsItemDetailFailAction
;

export interface IGetNewsFeedAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_FEED
}

export const getNewsFeedAction = (): IGetNewsFeedAction => ({
  type: NewsFeedConstants.GET_NEWS_FEED
});

export interface IGetNewsFeedSuccessAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
  newsfeed: any[]
}

export const getNewsFeedSuccessAction = (newsfeed: any[]): IGetNewsFeedSuccessAction => ({
  type: NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
  newsfeed
});

export interface IGetNewsFeedFailAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_FEED_FAIL,
  error: any
}

export const getNewsFeedFailAction = (error: any): IGetNewsFeedFailAction => ({
  type: NewsFeedConstants.GET_NEWS_FEED_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IUpdateDetailIxAction extends Action<string> {
  type: NewsFeedConstants.UPDATE_DETAIL_IX,
  detailIx: string
}

export const updateDetailIxAction = (detailIx: string): IUpdateDetailIxAction => ({
  type: NewsFeedConstants.UPDATE_DETAIL_IX,
  detailIx
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IToggleSelectCauseAction extends Action<string> {
  type: NewsFeedConstants.TOGGLE_SELECT_CAUSE,
  uuid: string
}

export const toggleSelectCauseAction = (uuid: string): IToggleSelectCauseAction => ({
  type: NewsFeedConstants.TOGGLE_SELECT_CAUSE,
  uuid
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IGetNewsItemDetailAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
  news_item_uuid: string
}

export const getNewsItemDetailAction = (news_item_uuid: string): IGetNewsItemDetailAction => ({
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
  news_item_uuid
});

export interface IGetNewsItemDetailSuccessAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
  news_item: any
}

export const getNewsItemDetailSuccessAction = (news_item: any): IGetNewsItemDetailSuccessAction => ({
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
  news_item
});

export interface IGetNewsItemDetailFailAction extends Action<string> {
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
  error: any
}

export const getNewsItemDetailFailAction = (error: any): IGetNewsItemDetailFailAction => ({
  type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
  error
});