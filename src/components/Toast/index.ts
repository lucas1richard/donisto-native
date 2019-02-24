import { Toast } from 'native-base';
import { defaultStyles, errorStyles } from './styles';

interface IShowToastArgs { text: string }
type TToastType = 'default'|'error';

const showToast = ({ text, ...other }: IShowToastArgs, type?: TToastType) => {
  let toastStyles = defaultStyles;
  if (type === 'error') {
    toastStyles = errorStyles;
  }
  Toast.show({
    text,
    ...other,
    position: 'top',
    duration: global.toastDuration,
    ...toastStyles
  });
};

export default showToast;
