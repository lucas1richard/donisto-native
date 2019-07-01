import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Txt, { ITxtProps } from '..';

describe('<Txt />', () => {
  const renderComponent = (props: ITxtProps) => toJson(shallow(<Txt {...props} />));
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