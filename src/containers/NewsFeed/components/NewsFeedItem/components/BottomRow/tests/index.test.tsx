import * as React from 'react';
import { shallow } from 'enzyme';
import BottomRow from '..';

describe('<BottomRow />', () => {
  const renderComponent = () => shallow(<BottomRow />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});