import * as React from 'react';
import { shallow } from 'enzyme';
import AddCauseLink from '..';

describe('<AddCauseLink />', () => {
  const renderComponent = () => shallow(<AddCauseLink />);
  it('renders with just text', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});