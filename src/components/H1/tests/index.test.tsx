import * as React from 'react';
import { shallow } from 'enzyme';
import H1, { IH1Props } from '..';

describe('<H1 />', () => {
  const renderComponent = (props: IH1Props) => shallow(<H1 {...props} />);
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