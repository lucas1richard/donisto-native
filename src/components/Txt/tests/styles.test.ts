import styles from '../styles';

describe('Txt styles', () => {
  it('matches a snapshot', () => {
    expect(styles).toMatchSnapshot();
  });
});