import React from 'react';
import { View, Image } from 'react-native';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import card from 'styles/Card';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
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
        const { item, img } = this.props;
        return (React.createElement(Touchable, { onPress: this.toggleModal },
            React.createElement(View, { key: item.id, style: card() },
                React.createElement(Image, { source: img, style: { width: '100%', height: 200, overflow: 'hidden' } }),
                React.createElement(H1, null, item.title),
                React.createElement(H2, null, item.subtitle)),
            React.createElement(RNModal, { title: item.title.slice(0, 20), onHide: this.toggleModal, visible: this.state.modalVisible },
                React.createElement(View, { style: { padding: theme.screenPadding } },
                    React.createElement(H2, null, item.subtitle),
                    React.createElement(Image, { source: img, style: { width: '100%', height: 200, overflow: 'hidden' } }),
                    React.createElement(Txt, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
                    React.createElement(Txt, null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))));
    }
}
export default NewsFeedItem;
//# sourceMappingURL=index.js.map