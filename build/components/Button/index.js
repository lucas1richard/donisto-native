import React from 'react';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import { Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.canPress = true;
    }
    render() {
        const { onPress, title, color } = this.props;
        return (React.createElement(Touchable, { onPress: onPress },
            React.createElement(View, { style: [viewStyles[color]] },
                React.createElement(Text, { style: [textStyles[color]] }, title))));
    }
}
Button.defaultProps = {
    color: '_default',
    variant: 'default'
};
export default Button;
//# sourceMappingURL=index.js.map