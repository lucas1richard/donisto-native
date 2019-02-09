// import jest from 'jest';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrainingWheels from 'utilities/TrainingWheels';
import theme from 'theme/iftheme';

jest.mock('native-base', () => ({
  Toast: {
    show: () => 'Show'
  }
}));

jest.mock('components/Modal', () => ({
  show: () => 'Show'
}));
// jest.mock('expo', () => ({
//   Constants: {
//     platform: {
//       ios: {
//         model: 'iPhone 6'
//       }
//     }
//   },
//   SecureStore: {
//     WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: 'WHEN_PASSCODE_SET_THIS_DEVICE_ONLY'
//   }
// }));

global.toastDuration = 3000;
global.theme = theme;
global.TrainingWheels = TrainingWheels;
global.logger = {
  log: () => 'Log',
  error: () => 'Error',
  info: () => 'Info',
  warn: () => 'Warn'
};

configure({
  adapter: new Adapter()
});
