import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './CheckboxWithLabel.css';

class CheckboxWithLabel extends Component {
  forwardOnClick( e ) {
    this.check.onClick( e );
  }

  render() {
    return (
      <div className="checkbox-with-label">
        <Checkbox
          {...this.props}
          ref={(check) => { this.check = check; }}
        />
        <label
          className="label"
          htmlFor={ this.props.id }
          onClick={ this.forwardOnClick.bind(this) }>
          { this.props.label }
        </label>
      </div>
    );
  }
}

export default CheckboxWithLabel;

/*
We are looking for you to build a checkbox and label component using react.
You must not use the native checkbox element.
 */
