import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TopRow from './components/TopRow';
import BottomRow from './components/BottomRow';
import Img from './components/Img';
class NewsFeedItem extends React.Component {
    render() {
        const { item, img, navDetail } = this.props;
        return (React.createElement(View, null,
            React.createElement(View, { style: styles.wrapper, key: item.id },
                React.createElement(TopRow, { name: item.organization.name }),
                React.createElement(Img, { navDetail: navDetail, img: img }),
                React.createElement(BottomRow, null))));
    }
}
export default NewsFeedItem;
//# sourceMappingURL=index.js.map