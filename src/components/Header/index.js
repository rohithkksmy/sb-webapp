import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import { string } from 'prop-types';

export default class Header extends PureComponent {
    static propTypes = {
        headerValue: string,
        headerText: string
    };

    createHeader() {
        switch(this.props.headerValue) {
            case "h1":
                return <h1>{this.props.headerText}</h1>;
            case "h2":
                return <h2>{this.props.headerText}</h2>;
            case "h3":
                return <h3>{this.props.headerText}</h3>;
            case "h4":
                return <h4>{this.props.headerText}</h4>;
            case "h5":
                return <h5>{this.props.headerText}</h5>;
        }
    }

    render() {
        return ( <div>
                    {this.createHeader()}
                </div>
        )
    }
}
