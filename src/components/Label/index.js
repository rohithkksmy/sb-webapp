import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';

export default class Label extends PureComponent {
static propTypes = {
label: string,
};
  render() {
    return <div>{this.props.label}</div>;
  }
}
