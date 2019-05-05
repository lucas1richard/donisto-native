import * as React from 'react';
import { shallow } from 'enzyme';
import Right, { IRightProps } from '../Right';

describe('<Right />', () => {
  const renderComponent = (props: IRightProps) => shallow(<Right {...props} />);
  it('renders', () => {
    expect(renderComponent({
      onClose: jest.fn()
    })).toMatchSnapshot();
  });
});