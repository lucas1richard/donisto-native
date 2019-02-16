var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Toast } from 'native-base';
import { defaultStyles, errorStyles } from 'styles/toast';
const showToast = (_a, type) => {
    var { text } = _a, other = __rest(_a, ["text"]);
    let toastStyles = defaultStyles;
    if (type === 'error') {
        toastStyles = errorStyles;
    }
    Toast.show(Object.assign({ text }, other, { position: 'top', duration: global.toastDuration }, toastStyles));
};
export default showToast;
//# sourceMappingURL=index.js.map