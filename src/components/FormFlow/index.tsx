import React from 'react';

class FormFlow<T> extends React.Component<T> {
  fields: { [x: string]: any} = {};

  /** Save the field to the form */
  registerField = (name: string) => (el: any): void => {
    this.fields[name] = el;
  }

  /** Focus the next input */
  submitEditing = (name: string) => (): void => {
    if (Array.isArray(name)) {
      for (let ix = 0; ix < name.length; ix += 1) {
        if (this.fields[name[ix]]) {
          this.fields[name[ix]].focus();
        }
      }
    } else if (name && this.fields[name]) {
      this.fields[name].focus();
    }
  }
}

export default FormFlow;
