import React from 'react';
import { View, Image } from 'react-native';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
import Card from 'components/Card';
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
            React.createElement(View, null,
                React.createElement(Card, { key: item.id },
                    React.createElement(Image, { source: img, style: { width: '100%', height: 200, overflow: 'hidden' } }),
                    React.createElement(H1, null, item.title)),
                React.createElement(RNModal, { title: item.title.slice(0, 20), onHide: this.toggleModal, visible: this.state.modalVisible },
                    React.createElement(View, { style: { padding: theme.screenPadding } },
                        React.createElement(H2, null, item.subtitle),
                        React.createElement(Image, { source: img, style: { width: '100%', height: 200, overflow: 'hidden' } }),
                        React.createElement(Txt, null, item.text))))));
    }
}
export default NewsFeedItem;
//# sourceMappingURL=index.js.map