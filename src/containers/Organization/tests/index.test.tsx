import * as React from 'react';
import { shallow } from 'enzyme';

import { Organization, IOrganizationProps } from '../index';

describe('<Organization />', () => {
  const renderComponent = (props: IOrganizationProps) => shallow(<Organization {...props} />);
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      organizationUuid: 'string',
      activeOrg: { name: 'any' },
    })).toMatchSnapshot();
  });
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({})).toMatchSnapshot();
  });
});
