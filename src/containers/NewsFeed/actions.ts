import NewsFeedConstants from "./constants";
import { Action } from "redux";

export type TNewsFeedActions =
  IGetNewsFeedAction
  | IGetNewsFeedSuccessAction
  | IGetNewsFeedFailAction
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