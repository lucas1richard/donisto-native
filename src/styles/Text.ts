// @flow

import theme from 'theme/iftheme';

/**
 * Function which creates an object to be inserted into StyleSheet
 */
const text = (specific = {}, colorSpec?: string) => {
  let color = theme.blue;
  if (colorSpec) {
    color = theme[colorSpec];
  }
  if (!color) {
    color = colorSpec;
  }
  return {
    color,
    fontSize: 18,
    ...specific
  };
};

export default text;
