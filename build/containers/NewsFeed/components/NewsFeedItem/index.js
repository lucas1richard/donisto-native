import React from 'react';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import card from 'styles/Card';
import H1 from 'components/H1';
import H2 from 'components/H2';
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
            React.createElement(View, { key: item.id, style: card() },
                React.createElement(H1, null, item.title),
                React.createElement(H2, null, item.subtitle)),
            React.createElement(RNModal, { title: item.title.slice(0, 20), onHide: this.toggleModal, visible: this.state.modalVisible },
                React.createElement(View, { style: { padding: theme.screenPadding } },
                    React.createElement(H2, null, item.subtitle)))));
    }
}
export default NewsFeedItem;
//# sourceMappingURL=index.js.map