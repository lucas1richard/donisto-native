import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TOSandPrivacy from '..';

describe('<TOSandPrivacy />', () => {
  const renderComponent = () => toJson(shallow(<TOSandPrivacy />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});