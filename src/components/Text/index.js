import React, { PureComponent } from 'react';
import { string } from 'prop-types';

export default class Text extends PureComponent {
  static propTypes = {
    value: string,
    className: string
  };

  render() {
    return <p {...this.props} >{this.props.value}</p>;
  }
}
