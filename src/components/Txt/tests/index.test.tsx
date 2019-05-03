import * as React from 'react';
import { shallow } from 'enzyme';
import Txt, { ITxtProps } from '..';

describe('<Txt />', () => {
  const renderComponent = (props: ITxtProps) => shallow(<Txt {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
  it('renders with a color prop', () => {
    expect(renderComponent({
      children: 'mockText',
      color: 'light',
    })).toMatchSnapshot();
  });
});