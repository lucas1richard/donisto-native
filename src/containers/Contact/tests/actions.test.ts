import * as actions from '../actions';
import ContactConstants from '../constants';

describe('Contact actions', () => {
  const contact = {
    first_name: 'mockFirstName',
    last_name: 'mockLastName',
    email: 'mockEmail',
    uuid: 'mockUuid',
  };

  it('has a get contact action', () => {
    expect(actions.getContactAction()).toEqual({
      type: ContactConstants.GET_CONTACT
    });
  });
  it('has a get contact success action', () => {
    expect(actions.getContactSuccessAction(contact)).toEqual({
      type: ContactConstants.GET_CONTACT_SUCCESS,
      contact
    });
  });
  it('has a get contact fail action', () => {
    expect(actions.getContactFailAction('reason')).toEqual({
      type: ContactConstants.GET_CONTACT_FAIL,
      error: 'reason'
    });
  });
  it('has an update contact action', () => {
    expect(actions.updateContactAction()).toEqual({
      type: ContactConstants.UPDATE_CONTACT
    });
  });
  it('has an update contact success action', () => {
    expect(actions.updateContactSuccessAction(contact)).toEqual({
      type: ContactConstants.UPDATE_CONTACT_SUCCESS,
      contact
    });
  });
  it('has an update contact fail action', () => {
    expect(actions.updateContactFailAction('reason')).toEqual({
      type: ContactConstants.UPDATE_CONTACT_FAIL,
      error: 'reason'
    });
  });
  it('has a get org news feed action', () => {
    expect(actions.getOrgNewsFeedAction()).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED,
    });
  });
  it('has a get org news feed success action', () => {
    expect(actions.getOrgNewsFeedSuccessAction([])).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
      orgNewsFeed: []
    });
  });
  it('has a get org news feed fail action', () => {
    expect(actions.getOrgNewsFeedFailAction('reason')).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
      error: 'reason'
    });
  });
});