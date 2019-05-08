import * as React from 'react';
import { ScrollView, View } from 'react-native';
import mapToProps from './mapToProps';
import H3 from 'components/H3';
import ContactHeading from './components/Heading';
import Story from './components/Story';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';
import Cause from './components/Cause';
import Organization from './components/Organization';
import AddCauseLink from './components/AddCauseLink';
const images = [
    require('../../../assets/scenic-1.jpg'),
    require('../../../assets/happy-1.jpg'),
    require('../../../assets/scenic-2.jpg')
];
export class Contact extends React.Component {
    render() {
        const { contact, orgNewsFeed, causes, organizations, goToOrgDetail } = this.props;
        return (React.createElement(ScrollView, null,
            React.createElement(ContactHeading, { contact: contact }),
            React.createElement(View, { style: { paddingHorizontal: theme.screenPadding } },
                React.createElement(H3, null, "Organizations"),
                React.createElement(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false }, organizations.map((org, ix) => (React.createElement(Organization, { key: org.id, title: org.name, img: images[ix % (images.length)], onPress: () => goToOrgDetail(org.uuid) })))),
                React.createElement(H3, null, "Causes"),
                React.createElement(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false },
                    React.createElement(AddCauseLink, null),
                    causes.map((item, ix) => (React.createElement(Cause, { key: item.id, title: item.name, img: images[ix % (images.length)] })))),
                React.createElement(H3, null, "Donations"),
                React.createElement(ScrollView, { horizontal: true },
                    React.createElement(Txt, null, "No Donations Yet")),
                React.createElement(H3, null, "Stories"),
                React.createElement(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false }, orgNewsFeed.map((item, ix) => (React.createElement(Story, { key: item.id, title: item.title, img: images[ix % (images.length)] })))))));
    }
}
export default mapToProps(Contact);
//# sourceMappingURL=index.js.map