import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Contact, IContactProps } from '../index';

describe('<Contact />', () => {
  const renderComponent = (props: IContactProps) => toJson(shallow(<Contact {...props} />));
  it('renders', () => {
    expect(renderComponent({
      contact: {
        first_name: 'mockFirstName',
        last_name: 'mockLastName',
        email: 'mockEmail',
        uuid: 'mockUuid'
      },
      orgNewsFeed: [],
      causes: [],
      organizations: [],
      goToOrgDetail: jest.fn(),
    })).toMatchSnapshot();
  });
});