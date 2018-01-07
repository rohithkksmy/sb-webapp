import React,{ PureComponent } from 'react';
import {func,string,boolean} from 'prop-types';

export default class Checkbox extends PureComponent{
  static propTypes ={
    loginCheckbox : boolean

  }

  render(){
      return <input type ="Checkbox" value ={this.props.loginCheckbox}></input>
  }
}
