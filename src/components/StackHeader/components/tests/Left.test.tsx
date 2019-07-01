import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Left, { ILeftProps } from '../Left';

describe('<Left />', () => {
  const renderComponent = (props: ILeftProps) => toJson(shallow(<Left {...props} />));
  it('renders', () => {
    expect(renderComponent({
      onBack: jest.fn()
    })).toMatchSnapshot();
  });
});