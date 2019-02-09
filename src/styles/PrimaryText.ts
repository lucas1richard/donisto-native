import text from './Text';

const PrimaryText = (override = {}, color?: string) => text({
  fontSize: 36,
  ...override
}, color);

export default PrimaryText;
