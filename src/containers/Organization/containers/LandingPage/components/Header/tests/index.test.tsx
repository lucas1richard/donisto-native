import * as React from 'react';
import { shallow } from 'enzyme';
import UpdateContactHeader from '..';

describe('<UpdateContactHeader />', () => {
  const renderComponent = () => shallow(<UpdateContactHeader />);
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});