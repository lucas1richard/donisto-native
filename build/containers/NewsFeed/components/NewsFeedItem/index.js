import React from 'react';
import { View, Text } from 'react-native';
import { h1, h2 } from 'styles/Headings';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
class NewsFeedItem extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            modalVisible: false
        };
        this.toggleModal = () => {
            this.setState({ modalVisible: !this.state.modalVisible });
        };
    }
    render() {
        const { item } = this.props;
        return (React.createElement(Touchable, { onPress: this.toggleModal },
            React.createElement(View, { key: item.id, style: { borderBottomWidth: 1, paddingVertical: 18 } },
                React.createElement(Text, { style: h1() }, item.title),
                React.createElement(Text, { style: h2() }, item.subtitle)),
            React.createElement(RNModal, { title: item.title.slice(0, 50), onHide: this.toggleModal, visible: this.state.modalVisible },
                React.createElement(View, { style: { padding: theme.screenPadding } },
                    React.createElement(Text, { style: h1() }, item.subtitle)))));
    }
}
export default NewsFeedItem;
//# sourceMappingURL=index.js.map