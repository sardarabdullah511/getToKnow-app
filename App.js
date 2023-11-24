import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
import AppNavigator from './Navigation/AppNavigator'


export default class App extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
 
    }

  }
  render() {

    return (
      
  <AppNavigator/>
       
    );
  }
}
const styles = StyleSheet.create({
  
  


});