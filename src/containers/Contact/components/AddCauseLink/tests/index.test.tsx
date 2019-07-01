import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddCauseLink from '..';

describe('<AddCauseLink />', () => {
  const renderComponent = () => toJson(shallow(<AddCauseLink />));
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});