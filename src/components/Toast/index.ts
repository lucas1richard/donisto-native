import { Toast } from 'native-base';
import toastStyles from 'styles/toast';

const showToast = ({ text, ...other }: { text: string }) => Toast.show({
  text,
  ...other,
  position: 'top',
  duration: global.toastDuration,
  ...toastStyles
});

export default showToast;
