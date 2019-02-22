import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

interface IContactHeadingProps {
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
        <Image
          source={require('../../../../../assets/charity-demo.jpeg')}
          style={styles.image}
        />
        <View style={styles.profilePicWrapper} />
        <View style={{ position: 'absolute', bottom: theme.fs, right: theme.screenPadding, maxWidth: theme.fs * 15 }}>
          <Txt color="light">
            {contact.first_name} {contact.last_name}
          </Txt>
          <Txt color="light">
            {this.contactLocation}
          </Txt>
        </View>
        <Touchable onPress={() => NavigationService.openDrawer()}>
          <View style={{ position: 'absolute', right: theme.screenPadding, top: theme.screenPadding }}>
            <Entypo name="dots-three-horizontal" color="#fff" size={theme.fs * 2} />
          </View>
        </Touchable>
      </View>
    );
  }
}

export default ContactHeading;
