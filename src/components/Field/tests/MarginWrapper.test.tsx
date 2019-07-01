import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MarginWrapper, { IMarginWrapperProps } from '../MarginWrapper';

describe('<MarginWrapper />', () => {
  const renderComponent = (props: IMarginWrapperProps) => toJson(shallow(<MarginWrapper {...props} />));
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
});