import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Template extends PureComponent {
    render() {
        return ( <div className = {styles.mainDiv}>
                    This is template main div
                </div>
        )
    }
}
