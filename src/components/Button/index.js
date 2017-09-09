import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Button extends PureComponent {
  static propTypes = {
    label: string,
    className: string,
    variation: string,
    onClick: func,
  };

  render() {
    const { className, label, variation, onClick, ...others } = this.props;
    const buttonClass = classNames(styles.common, className, { [styles[variation]]: styles[variation] });

    return <button className={buttonClass} onClick={onClick} {...others} >{label}</button>;
  }
}
