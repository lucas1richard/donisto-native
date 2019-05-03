import * as React from 'react';
import { shallow } from 'enzyme';
import MarginWrapper, { IMarginWrapperProps } from '../MarginWrapper';

describe('<MarginWrapper />', () => {
  const renderComponent = (props: IMarginWrapperProps) => shallow(<MarginWrapper {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
});