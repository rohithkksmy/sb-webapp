import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { asyncConnect } from 'redux';
import { func } from 'prop-types';
import styles from './styles.scss';
import Text from '../../components/Text';
import Header from '../../components/Header';
import TextIn from '../../components/TextIn';
import Template from '../../components/Templates';
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
        <div>
          <Template></Template>
          <Header headerValue = "h1" headerText = "This is a sample Header"></Header>
          <TextIn inputType = "text"></TextIn>
          <TextIn inputType = "password"></TextIn>
        </div>
      </div>
    );
  }
}
