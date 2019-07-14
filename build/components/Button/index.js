import * as React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'components/Touchable';
import { viewStyles, textStyles } from './styles';
import theme from 'theme/iftheme';
import Loader from 'components/Loader';
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.canPress = true;
    }
    get textStyles() {
        const { color, variant } = this.props;
        if (variant === 'text') {
            switch (color) {
                case 'primary':
                    return textStyles['text-primary'];
                case 'secondary':
                    return textStyles['text-secondary'];
                default:
                    return textStyles['text-default'];
            }
        }
        return textStyles[color];
    }
    get viewStyles() {
        const { color, variant } = this.props;
        if (variant === 'text') {
            return viewStyles.text;
        }
        return [viewStyles[color], viewStyles[variant]];
    }
    render() {
        const { onPress, title, icon, showLoader, disabled } = this.props;
        if (showLoader) {
            return React.createElement(Loader, null);
        }
        return (React.createElement(Touchable, { onPress: onPress, disabled: disabled },
            React.createElement(View, { style: this.viewStyles },
                icon ? (React.createElement(View, { style: { marginRight: theme.fs } }, icon)) : undefined,
                React.createElement(Text, { style: this.textStyles }, title))));
    }
}
Button.defaultProps = {
    color: '_default',
    variant: 'default'
};
export default Button;
//# sourceMappingURL=index.js.map