// @flow

export const marginWidth: number = 8;

const container = (override: Object = {}): Object => ({
  marginHorizontal: marginWidth,
  ...override
});

export default container;
