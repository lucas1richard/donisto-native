import * as React from 'react';
import { shallow } from 'enzyme';
import Loader from '..';

describe('<Loader />', () => {
  it('renders', () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });
});