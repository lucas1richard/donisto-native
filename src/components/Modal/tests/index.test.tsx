import * as React from 'react';
import { shallow } from 'enzyme';
import Modal, { IRNModalProps } from '..';

describe('<Modal />', () => {
  const renderComponent = (props: IRNModalProps) => shallow(<Modal {...props} />);
  it('renders', () => {
    expect(renderComponent({
      onHide: jest.fn(),
      children: 'mockChildren'
    })).toMatchSnapshot();
  });
});