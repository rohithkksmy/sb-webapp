import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { asyncConnect } from 'redux';
import { func } from 'prop-types';
import styles from './styles.scss';
import Text from '../../components/Text';
import Template from '../../components/Templates';
import * as profileActions from '../../redux/modules/profile';
import Label from '../../components/Label';
import Checkbox from '../../components/Checkbox';

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
        <div>
          <Template></Template>
        </div>
        <Label label ="Name"></Label>
        <Checkbox></Checkbox>
      </div>
    );
  }
}
