import React from 'react';
class FormFlow extends React.Component {
    constructor() {
        super(...arguments);
        this.fields = {};
        /** Save the field to the form */
        this.registerField = (name) => (el) => {
            this.fields[name] = el;
        };
        /** Focus the next input */
        this.submitEditing = (name) => () => {
            if (Array.isArray(name)) {
                for (let ix = 0; ix < name.length; ix += 1) {
                    if (this.fields[name[ix]]) {
                        this.fields[name[ix]].focus();
                    }
                }
            }
            else if (name && this.fields[name]) {
                this.fields[name].focus();
            }
        };
    }
}
export default FormFlow;
//# sourceMappingURL=index.js.map