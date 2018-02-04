import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import TopComponet from './src/components/TopComponent/TopComponent';
import BottomComponent from './src/components/BottomComponent/FlatListBottom';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textInputValue : "",
      appended: []
    }
  }

  changeInputBoxText = (val) => {
    this.setState({textInputValue: val});
  };

  lisItemPress = (index) => {
    alert(index);
    this.setState(prevState => {
      return {
        appended : prevState.appended.filter(
      (value, i) => { return i !== index})
    }
    });
  }

  alertInput = () => {
    var tiv = this.state.textInputValue;
    var beflength = this.state.appended.length;
    this.setState(prevState => {return {appended: prevState.appended.concat({key:prevState.appended.length + (Math.random() + Math.random()), value: prevState.textInputValue}), textInputValue: ''}});
    alert("tiv = " + tiv + " length before = " + beflength);

  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TopComponet textInputValue = {this.state.textInputValue} changeInputBoxText = {this.changeInputBoxText} alertInput = {this.alertInput}/>
        <BottomComponent appended = {this.state.appended} lisItemPress = {this.lisItemPress}/>
        
      </View>
    );
  }
}


