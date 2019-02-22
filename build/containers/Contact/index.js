import React from 'react';
import { ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import H3 from 'components/H3';
import ContactHeading from './components/Heading';
import Donation from './components/Donation';
import Story from './components/Story';
class Contact extends React.Component {
    render() {
        const { contact } = this.props;
        return (React.createElement(ScrollView, null,
            React.createElement(ContactHeading, { contact: contact }),
            React.createElement(H3, null, "Donations"),
            React.createElement(ScrollView, { horizontal: true },
                React.createElement(Donation, { title: "Donation 1" }),
                React.createElement(Donation, { title: "Donation 2" }),
                React.createElement(Donation, { title: "Donation 3" }),
                React.createElement(Donation, { title: "Donation 4" })),
            React.createElement(H3, null, "Stories"),
            React.createElement(ScrollView, { horizontal: true },
                React.createElement(Story, { title: "Story 1" }),
                React.createElement(Story, { title: "Story 2" }),
                React.createElement(Story, { title: "Story 3" }),
                React.createElement(Story, { title: "Story 4" }))));
    }
}
export default mapToProps(Contact);
//# sourceMappingURL=index.js.map