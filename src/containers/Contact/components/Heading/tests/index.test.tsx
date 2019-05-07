import * as React from 'react';
import { shallow } from 'enzyme';
import ContactHeading, { IContactHeadingProps } from '..';

describe('<ContactHeading />', () => {
  const renderComponent = (props: IContactHeadingProps) => shallow(<ContactHeading {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({
      contact: {
        city: 'mockCity',
        state: 'mockState',
        first_name: 'mockFirstName',
        last_name: 'mockLastName',
      }
    })).toMatchSnapshot();
  });
});