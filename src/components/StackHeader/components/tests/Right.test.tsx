import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Right, { IRightProps } from '../Right';

describe('<Right />', () => {
  const renderComponent = (props: IRightProps) => toJson(shallow(<Right {...props} />));
  it('renders', () => {
    expect(renderComponent({
      onClose: jest.fn()
    })).toMatchSnapshot();
  });
});