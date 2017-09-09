import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { asyncConnect } from 'redux';
import { func } from 'prop-types';
import styles from './styles.scss';
import Text from '../../components/Text';
import * as profileActions from '../../redux/modules/profile';

@connect(state => ({ gotProfile: state.profile.gotData }),
{
  getProfileData: profileActions.getProfileData,
  getRepos: profileActions.getRepos
})
export default class Home extends PureComponent {
  static propTypes = {
    getProfileData: func,
    getRepos: func
  }

  componentWillMount() {
    this.props.getProfileData();
    this.props.getRepos();
  }

  render() {
    return (
      <div className={styles.home} >
        <Text className={styles.text} value="HelloWorld" />
      </div>
    );
  }
}
