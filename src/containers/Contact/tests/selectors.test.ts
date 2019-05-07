import { selectContactDomain, makeSelectContact, makeSelectOrgNewsFeed, makeSelectOrganizationUuid } from '../selectors';

describe('Contact selectors', () => {
  const contact = {
    first_name: 'mockFirstName',
    last_name: 'mockLastName',
    uuid: 'mockUuid',
    email: 'mockEmail',
    organization_uuid: 'mockOrgUuid'
  };
  describe('selectContactDomain', () => {
    it('gets the contact substate', () => {
      const selector = selectContactDomain();
      expect(selector({ contact })).toEqual(contact);
    });
  });
  describe('makeSelectContact', () => {
    it('gets the contact substate', () => {
      const selector = makeSelectContact();
      expect(selector({ contact })).toEqual(contact);
    });
  });
  describe('makeSelectOrganizationUuid', () => {
    it('gets the contact substate', () => {
      const selector = makeSelectOrganizationUuid();
      expect(selector({ contact })).toEqual('mockOrgUuid');
    });
  });
  describe('makeSelectOrgNewsFeed', () => {
    it('gets the orgNewsFeed substate', () => {
      const selector = makeSelectOrgNewsFeed();
      const contactWOrgNewsFeed = {
        ...contact,
        orgNewsFeed: [1, 2, 3]
      };
      expect(selector({
        contact: contactWOrgNewsFeed
      })).toEqual([1, 2, 3]);
    });
    it('gets the orgNewsFeed substate', () => {
      const selector = makeSelectOrgNewsFeed();
      expect(selector({ contact })).toEqual([]);
    });
  });
});