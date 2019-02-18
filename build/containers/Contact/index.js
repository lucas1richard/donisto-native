import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Touchable from 'components/Touchable';
import ContactHeading from './components/Heading';
class Contact extends React.Component {
    render() {
        const { contact } = this.props;
        return (React.createElement(ScrollView, null,
            React.createElement(ContactHeading, { contact: contact }),
            React.createElement(H3, null, "Donations"),
            React.createElement(ScrollView, { horizontal: true },
                React.createElement(View, { style: { width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Donation 1")))),
                React.createElement(View, { style: { width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Donation 2")))),
                React.createElement(View, { style: { width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Donation 3")))),
                React.createElement(View, { style: { width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Donation 4"))))),
            React.createElement(H3, null, "Stories"),
            React.createElement(ScrollView, { horizontal: true },
                React.createElement(View, { style: { width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Story 1")))),
                React.createElement(View, { style: { width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Story 2")))),
                React.createElement(View, { style: { width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Story 3")))),
                React.createElement(View, { style: { width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize } },
                    React.createElement(Touchable, null,
                        React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(H2, { color: "light" }, "Story 4")))))));
    }
}
export default mapToProps(Contact);
//# sourceMappingURL=index.js.map