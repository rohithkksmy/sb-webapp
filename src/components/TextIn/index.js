import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import { string } from 'prop-types';

export default class TextIn extends PureComponent {
    static propTypes = {
        inputType: string
    };

    render(){
        return (
            <div>
                <input type ={this.props.inputType} />
            </div>
        )
    }
}