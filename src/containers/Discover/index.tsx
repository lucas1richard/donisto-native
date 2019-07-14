import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import Loader from 'components/Loader';
import SwiperCards from './components/SwiperCards';

export interface IDiscoverProps {
  discoverOrgs: IOrganization.Basic[];
  loaded: boolean;
  getDiscoverOrgs: () => any;
  followOrg: (uuid: string) => any;
  rejectFollowOrg: (uuid: string) => any;
}

export class Discover extends React.Component<IDiscoverProps> {
  componentDidMount() {
    this.props.getDiscoverOrgs();
  }

  handleYup = (card: IOrganization.Basic) => {
    this.props.followOrg(card.uuid);
  }

  handleNope = (card: IOrganization.Basic) => {
    this.props.rejectFollowOrg(card.uuid);
  }

  render() {
    const { discoverOrgs, loaded } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#d3d3d3',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: theme.screenPadding
        }}>
          <Entypo
            name="plus"
            color={theme.primary[500]}
            size={25}
          />
          <Txt style={{ fontSize: 22, fontWeight: '600' }}>
            Discover
          </Txt>
          <Entypo
            name="magnifying-glass"
            color={theme.primary[500]}
            size={25}
          />
        </View>
        <View style={{ paddingHorizontal: theme.screenPadding }}>
          {/* <Button
            title="Get Discover"
            color="primary"
            variant="contained"
            onPress={this.props.getDiscoverOrgs}
          /> */}
          {!loaded
          ? (
            <Loader />
          )
          : (
            <SwiperCards
              cards={discoverOrgs}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
            />
          )}
          {/* {!!discoverOrgs && !!discoverOrgs.length && (
            <SwipeCards
              cards={discoverOrgs}
              loop={false}
              renderCard={Card}
              renderNoMoreCards={() => <View><Txt>No More Cards</Txt></View>}
              showYup={false}
              showNope={false}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              cardRemoved={() => false}
            />
          )} */}
        </View>
      </View>
    );
  }
}

export default mapToProps(Discover);