import * as React from 'react';
import { shallow } from 'enzyme';
import TOSandPrivacy from '..';

describe('<TOSandPrivacy />', () => {
  const renderComponent = () => shallow(<TOSandPrivacy />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});