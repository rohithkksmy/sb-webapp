import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom'
import styles from './styles.scss';

class Application extends PureComponent {
  static propTypes = {
    children: object
  };

  render() {
    return (
      <div className={styles.application} >
        <Helmet>
          <link rel="shortcut icon" type="image/png" href="/static/images/logo-blue.png"/>
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Application);