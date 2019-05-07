import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

export interface IContactHeadingProps {
  contact: any;
}

class ContactHeading extends React.Component<IContactHeadingProps> {
  get contactLocation() {
    const { contact } = this.props;
    if (contact.city && contact.state) {
      return `${contact.city}, ${contact.state}`;
    }
    return contact.city || contact.state;
  }

  render() {
    const { contact } = this.props;
    return (
      <View style={styles.wrapper}>
        <ImageBackground
          source={require('../../../../../assets/charity-demo.jpeg')}
          style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: theme.screenPadding,
            paddingVertical: theme.screenPadding,
            backgroundColor: '#000'
          }}
          imageStyle={{
            height: 200,
            overflow: 'hidden',
            flex: 1,
            alignSelf: 'flex-start'
          }}
        >
          <Touchable onPress={() => NavigationService.navigate(routeNames.UPDATE_CONTACT)}>
            <View>
              <Entypo
                name="dots-three-horizontal"
                color="#fff"
                size={theme.fs * 2}
              />
            </View>
          </Touchable>
        </ImageBackground>
        <View style={styles.profilePicWrapper} />
        <Touchable onPress={() => NavigationService.navigate(routeNames.UPDATE_CONTACT)}>
          <View style={styles.infoWrapper}>
            <Txt color="light">
              {contact.first_name} {contact.last_name}
            </Txt>
            <Txt color="light">
              {this.contactLocation}
            </Txt>
          </View>
        </Touchable>
      </View>
    );
  }
}

export default ContactHeading;
