import * as React from 'react';
import { View } from "react-native";
import Touchable from "components/Touchable";
import H3 from "components/H3";
import theme from 'theme/iftheme';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

interface ILinkProps {
  route: routeNames;
  title: string;
}

const Link = ({ route, title }: ILinkProps) => (
  <View style={{ marginBottom: theme.fs }}>
    <Touchable onPress={() => NavigationService.navigate(route)}>
      <View>
        <H3 color="light">{title}</H3>
      </View>
    </Touchable>
  </View>
);

export default Link;
