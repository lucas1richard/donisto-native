import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Donations, IDonationsProps } from '../';

describe('<Donations />', () => {
  const renderComponent = (props: IDonationsProps) => toJson(shallow(<Donations {...props} />));
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      donations: [],
      viewDetail: jest.fn(() => undefined),
      getCauseDetailsById: jest.fn(),
    })).toMatchSnapshot();
  });
});
