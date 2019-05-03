import { textStyles, viewStyles } from '../styles';

describe('button styles', () => {
  it('has text-styles', () => {
    expect(textStyles).toMatchSnapshot();
  });
  it('has view-styles', () => {
    expect(viewStyles).toMatchSnapshot();
  });
});