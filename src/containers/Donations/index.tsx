import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import Screen from 'components/Screen';
import Donation from './components/Donation';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';

interface IDonationsProps {
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

export class Donations extends React.Component<IDonationsProps> {
  render() {
    return (
      <Screen>
        <View style={{ height: '100%' }}>
        <View style={{
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }}>
          <Entypo
            name="plus"
            color={theme.primary[500]}
            size={25}
          />
          <Txt style={{ fontSize: 22, fontWeight: '600' }}>
            My Donations
          </Txt>
          <Entypo
            name="magnifying-glass"
            color={theme.primary[500]}
            size={25}
          />
        </View>
          <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 7.5 }}>
              <Donation img={images[0]} />
              <Donation img={images[1]} />
              <Donation img={images[2]} />
              <Donation img={images[0]} />
              <Donation img={images[1]} />
              <Donation img={images[2]} />
              <Donation img={images[0]} />
            </View>
          </ScrollView>
        </View>
      </Screen>
    );
  }
}

export default mapToProps(Donations);
