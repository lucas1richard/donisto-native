import Expo from 'expo';
import { Alert } from "react-native";
import logger from 'utilities/logger';

async function logIn() {
  try {
    const {
      type,
      token
    } = await Expo.Facebook.logInWithReadPermissionsAsync('372264243610330', {
      permissions: ['public_profile']
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      logger.log(response, 'Facebook');
      const json = await response.json();
      logger.log(json, 'Facebook - json');
      Alert.alert('Logged in!', `Hi ${json.name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

export default logIn;