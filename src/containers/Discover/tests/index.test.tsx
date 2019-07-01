import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Discover, IDiscoverProps } from '../index';

describe('<Discover />', () => {
  const renderComponent = (props: IDiscoverProps) => toJson(shallow(<Discover {...props} />));
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      followOrg: jest.fn(),
      rejectFollowOrg: jest.fn(),
      discoverOrgs: [],
      getDiscoverOrgs: jest.fn(),
      loaded: true
    })).toMatchSnapshot();
  });
});
