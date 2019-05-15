import * as React from 'react';
import { View, Picker, ScrollView } from 'react-native';
import CreateCauseForm from './Form';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import CreateCauseHeader from './components/Header';
import Txt from 'components/Txt';
import { BlurView } from 'expo';

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
      <View style={{ flex: 1 }}>
        <CreateCauseHeader />
        <ScrollView>
          <View style={{ paddingHorizontal: theme.screenPadding }}>
            <View style={{ marginVertical: theme.screenPadding }}>
              <View>
                <Txt>
                  Organization:
                </Txt>
                <BlurView tint="light" intensity={80}>
                  <Picker
                    selectedValue={selectedOrganization}
                    onValueChange={selectOrganization}
                    style={{ backgroundColor: '#f8f8f8', borderWidth: 1, borderColor: '#f8f8f8', borderRadius: theme.fs * 0.6 }}
                  >
                    <Picker.Item label="None" />
                    {organizations.map((org) => (
                      <Picker.Item
                        label={org.name}
                        value={org.uuid}
                        key={org.uuid}
                      />
                    ))}
                  </Picker>
                </BlurView>
              </View>
            </View>
            <CreateCauseForm
              onSubmit={createCause}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(CreateCause);