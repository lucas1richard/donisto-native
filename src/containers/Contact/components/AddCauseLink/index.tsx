import * as React from 'react';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import Touchable from 'components/Touchable';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import causeStyle from '../Cause/styles';
import style from './styles';

function AddCauseLink() {
  return (
    <Touchable onPress={() => NavigationService.navigate(routeNames.CAUSE)}>
      <View style={[causeStyle.wrapper, style.wrapper]}>
        <View style={causeStyle.textWrapper}>
          <Entypo
            name="plus"
            size={50}
            color="#fff"
            style={{ marginRight: 5 }}
          />
        </View>
      </View>
    </Touchable>
  );
}

export default AddCauseLink;