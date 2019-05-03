import * as React from 'react';
import { shallow } from 'enzyme';

import { Donations, IDonationsProps } from '../';

describe('<Donations />', () => {
  const renderComponent = (props: IDonationsProps) => shallow(<Donations {...props} />);
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      donations: [],
      viewDetail: jest.fn(() => undefined)
    })).toMatchSnapshot();
  });
});
