import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Organization, IOrganizationProps } from '../index';

describe('<Organization />', () => {
  const renderComponent = (props: IOrganizationProps) => toJson(shallow(<Organization {...props} />));
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      organizationUuid: 'string',
      activeOrg: { name: 'any', uuid: 'uuid' },
    })).toMatchSnapshot();
  });
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({})).toMatchSnapshot();
  });
});
