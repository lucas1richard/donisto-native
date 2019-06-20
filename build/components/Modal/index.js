var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Modal, View, ScrollView } from 'react-native';
import Stack from 'components/StackHeader';
import logger from 'utilities/logger';
import StatusBarComponent from 'components/StatusBar';
class RNModal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.modalWillShow = () => {
            if (this.props.onShow) {
                this.props.onShow();
            }
        };
        this.modalWillHide = () => {
            if (this.props.onRequestClose) {
                this.props.onRequestClose();
            }
            if (this.props.onHide) {
                this.props.onHide();
            }
        };
    }
    componentWillMount() {
        if (!RNModal.marginTop) {
            RNModal.marginTop = 20;
        }
    }
    render() {
        logger.log(RNModal.marginTop, 'Modal');
        const _a = this.props, { children, title } = _a, rest = __rest(_a, ["children", "title"]);
        return (React.createElement(Modal, Object.assign({ animationType: "slide" }, rest, { onShow: this.modalWillShow }),
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(StatusBarComponent, null),
                React.createElement(Stack, { title: title, noBackOption: true, onClose: this.modalWillHide }),
                React.createElement(ScrollView, null, children))));
    }
}
export default RNModal;
//# sourceMappingURL=index.js.map