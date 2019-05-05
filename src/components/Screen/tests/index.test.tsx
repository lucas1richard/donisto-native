import * as React from 'react';
import { shallow } from 'enzyme';
import Screen from '..';

describe('<Screen />', () => {
  const renderComponent = () => shallow(<Screen />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});