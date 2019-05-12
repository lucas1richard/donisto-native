import * as React from 'react';
import { shallow } from 'enzyme';
import AddOrgLink from '..';

describe('<AddOrgLink />', () => {
  const renderComponent = () => shallow(<AddOrgLink />);
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});