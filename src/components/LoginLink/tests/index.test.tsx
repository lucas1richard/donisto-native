import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginLink from '..';

describe('<LoginLink />', () => {
  const renderComponent = () => toJson(shallow(<LoginLink />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});