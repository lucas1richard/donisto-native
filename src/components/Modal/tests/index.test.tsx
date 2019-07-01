import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal, { IRNModalProps } from '..';

describe('<Modal />', () => {
  const renderComponent = (props: IRNModalProps) => toJson(shallow(<Modal {...props} />));
  it('renders', () => {
    expect(renderComponent({
      onHide: jest.fn(),
      children: 'mockChildren'
    })).toMatchSnapshot();
  });
});