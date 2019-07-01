import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddOrgLink from '..';

describe('<AddOrgLink />', () => {
  const renderComponent = () => toJson(shallow(<AddOrgLink />));
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});