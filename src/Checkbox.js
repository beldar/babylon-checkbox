import React, { Component } from 'react';
import classnames from 'classnames';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked || false };
  }

  onClick(e) {
    this.setState({
      checked: !this.state.checked
    });

    if (this.props.onClick && typeof this.props.onClick === 'function') {
      e.target.checked = this.state.checked;
      e.target.value = this.props.value;
      this.props.onClick(e);
    }

    if (this.props.onChange && typeof this.props.onChange === 'function') {
      e.target.checked = this.state.checked;
      e.target.value = this.props.value;
      this.props.onChange(e);
    }
  }

  render() {
    let classes = classnames({
      'checkbox': true,
      'checkbox--checked': this.state.checked
    });

    return (
      <div className={ classes } onClick={ this.onClick.bind(this) }></div>
    );
  }
}

export default Checkbox;
