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
    expect(actions.getContactAction.Default()).toEqual({
      type: ContactConstants.GET_CONTACT
    });
  });
  it('has a get contact success action', () => {
    expect(actions.getContactAction.Success(contact)).toEqual({
      type: ContactConstants.GET_CONTACT_SUCCESS,
      data: contact
    });
  });
  it('has a get contact fail action', () => {
    expect(actions.getContactAction.Fail('reason')).toEqual({
      type: ContactConstants.GET_CONTACT_FAIL,
      error: 'reason'
    });
  });
  it('has an update contact action', () => {
    expect(actions.updateContactAction.Default()).toEqual({
      type: ContactConstants.UPDATE_CONTACT
    });
  });
  it('has an update contact success action', () => {
    expect(actions.updateContactAction.Success(contact)).toEqual({
      type: ContactConstants.UPDATE_CONTACT_SUCCESS,
      data: contact
    });
  });
  it('has an update contact fail action', () => {
    expect(actions.updateContactAction.Fail('reason')).toEqual({
      type: ContactConstants.UPDATE_CONTACT_FAIL,
      error: 'reason'
    });
  });
  it('has a get org news feed action', () => {
    expect(actions.getOrgNewsFeedAction.Default()).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED,
    });
  });
  it('has a get org news feed success action', () => {
    expect(actions.getOrgNewsFeedAction.Success([])).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
      data: []
    });
  });
  it('has a get org news feed fail action', () => {
    expect(actions.getOrgNewsFeedAction.Fail('reason')).toEqual({
      type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
      error: 'reason'
    });
  });
});