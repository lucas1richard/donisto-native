/**
 * @module utilities/logger
 */
const cns = console;
const msgStyle = (style) => `font-weight: bold; font-size: 14px; ${style}`;
const titleStyle = (style) => `font-weight: bold; font-size: 14px; ${style}`;
function log(style = '', mgStyle = '', msg, file, color) {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    let injectedStyle = style;
    if (color) {
        injectedStyle = `color: ${color}; font-weight: bold;`;
    }
    if (typeof msg === 'string') {
        if (file) {
            cns.log(`%c(${file}) %c${msg}`, titleStyle(injectedStyle), msgStyle(mgStyle));
        }
        else {
            cns.log(`%cGRAND %c${msg}`, titleStyle(injectedStyle), msgStyle(mgStyle));
        }
    }
    else if (file) {
        cns.log(`%c(${file})`, titleStyle(injectedStyle), msg);
    }
    else {
        cns.log('%cGRAND', titleStyle(injectedStyle), msg);
    }
}
const logger = {
    log: (msg, file, color) => log('color: navy', '', msg, file, color),
    warn: (msg, file, color) => log('color: #cccc00', '', msg, file, color),
    info: (msg, file, color) => log('color: #76bdd5', 'font-size: 11px;', msg, file, color),
    error: (msg, file, color) => log('color: red', '', msg, file, color),
    time: (name) => __DEV__ ? cns.time(name) : undefined,
    timeEnd: (name) => __DEV__ ? cns.timeEnd(name) : undefined
};
global.logger = logger;
/**
 * Object with normal types
 */
export default logger;
//# sourceMappingURL=logger.js.map