import React from 'react';
import { ScrollView, View } from 'react-native';
import mapToProps from './mapToProps';
import H3 from 'components/H3';
import ContactHeading from './components/Heading';
import { NavigationFocusInjectedProps } from 'react-navigation';
import Story from './components/Story';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';
import Cause from './components/Cause';
import AddCauseLink from './components/AddCauseLink';

interface IContactProps extends NavigationFocusInjectedProps {
  contact: ContactAttributes;
  orgNewsFeed: any[],
  causes: any[]
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

class Contact extends React.Component<IContactProps> {
  render() {
    const { contact, orgNewsFeed, causes } = this.props;
    return (
      <ScrollView>
        <ContactHeading contact={contact} />
        <View style={{ paddingHorizontal: theme.screenPadding }}>
          <H3>Causes</H3>
          <ScrollView horizontal>
            <AddCauseLink />
            {causes.map((item, ix) => (
              <Cause
                key={item.id}
                title={item.name}
                img={images[ix % (images.length)]}
              />
            ))}
          </ScrollView>
          <H3>Donations</H3>
          <ScrollView horizontal>
            <Txt>No Donations Yet</Txt>
            {/* <Donation title="Donation 1" />
            <Donation title="Donation 2" />
            <Donation title="Donation 3" />
            <Donation title="Donation 4" /> */}
          </ScrollView>

          <H3>Stories</H3>
          <ScrollView horizontal>
            {orgNewsFeed.map((item, ix) => (
              <Story
                key={item.id}
                title={item.title}
                img={images[ix % (images.length)]}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(Contact);
