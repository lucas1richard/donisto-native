import * as React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import Button from 'components/Button';
import MarginWrapper from 'components/Field/MarginWrapper';
import theme from 'theme/iftheme';
import NICause from './components/Cause';
import SelectCauseHeader from './components/Header';
import Txt from 'components/Txt';

interface IChooseCauseProps {
  causes: any[],
  toggleSelect: (uuid: string) => any;
  selectedCauses: { [x: string]: boolean };
  selectedOrg: IOrganization.Basic;
}

class ChooseCause extends React.Component<IChooseCauseProps> {
  render() {
    const {
      causes,
      toggleSelect,
      selectedCauses,
      selectedOrg,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SelectCauseHeader />
        <ScrollView>
          {selectedOrg && (
            <Txt>{selectedOrg.name}</Txt>
          )}
          <MarginWrapper>
            {causes.map((cause) => (
              <NICause
                key={cause.uuid}
                name={cause.name}
                selected={selectedCauses[cause.uuid]}
                toggleSelect={() => toggleSelect(cause.uuid)}
              />
            ))}
          </MarginWrapper>
        </ScrollView>
        <View style={{ padding: theme.screenPadding }}>
          <Button
            onPress={() => NavigationService.navigate(routeNames.CREATE_NEWS_ITEM)}
            variant="contained"
            color="primary"
            title="Create Story"
          />
        </View>
      </View>
    );
  }
}

export default mapToProps(ChooseCause);