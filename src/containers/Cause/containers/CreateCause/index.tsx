import * as React from 'react';
import { View } from 'react-native';
import CreateCauseForm from './Form';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import CreateCauseHeader from './components/Header';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';

interface ICreateCauseProps {
  organizations: IOrganization[],
  createCause: () => any;
  selectOrganization: (uuid: string) => any;
  selectedOrganization: string;
}

class CreateCause extends React.Component<ICreateCauseProps> {
  render() {
    const {
      createCause,
      organizations,
      selectOrganization,
      selectedOrganization,
    } = this.props;
    return (
      <View>
        <CreateCauseHeader />
        <View style={{ paddingHorizontal: theme.screenPadding }}>
          <View style={{ marginVertical: theme.screenPadding }}>
            {organizations.map((org) => (
              <Touchable key={org.uuid} onPress={() => selectOrganization(selectedOrganization === org.uuid ? '' : org.uuid)}>
                <View>
                  <Txt>
                    {org.name} {selectedOrganization === org.uuid && ' - Selected'}
                  </Txt>
                </View>
              </Touchable>
            ))}
          </View>
          <CreateCauseForm
            onSubmit={createCause}
          />
        </View>
      </View>
    );
  }
}

export default mapToProps(CreateCause);