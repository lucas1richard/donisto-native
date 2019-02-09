import React from 'react';
import { View, Text } from 'react-native';
import { h1 } from 'styles/Headings';
class Profile extends React.Component {
    render() {
        return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
            React.createElement(Text, { style: h1() }, "Profile")));
    }
}
export default Profile;
//# sourceMappingURL=index.js.map