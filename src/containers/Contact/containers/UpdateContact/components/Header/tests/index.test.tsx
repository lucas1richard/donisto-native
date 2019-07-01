import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpdateContactHeader from '..';

describe('<UpdateContactHeader />', () => {
  const renderComponent = () => toJson(shallow(<UpdateContactHeader />));
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});