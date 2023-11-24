import React, { Component, Profiler } from 'react';
import {
  View,Card,CardItem,Linking, Thumbnail,Body,Left,Right,Button,Icon,FontAwesome,AntDesign,TouchableHighlight, Text, Platform, TouchableWithoutFeedback , KeyboardAvoidingView,TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal, SafeAreaView,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Container } from 'native-base';

import { style } from 'dom-helpers';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox=true


export default class Footer extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    
  }
  render() {

    return (
      
    

          <View style={{position:"absolute",bottom:10,flexDirection:"row",width:"100%",backgroundColor:"#777"}}>
          <TouchableHighlight style={{width:"30%",marginLeft:130}}>
          <Image style={{height: 30,width: 30,}} source={require('../assets/home.png')} />
          </TouchableHighlight>
          <TouchableHighlight style={{width:"30%",marginLeft:20}}>
          <Image style={{height: 30,width: 30,borderRadius: 15,}} source={require('../assets/add.png')} />
          </TouchableHighlight>
          <TouchableHighlight style={{width:"30%",marginLeft:20}}>
          <Image style={{height: 30,width: 30,borderRadius: 15,}} source={require('../assets/account.png')} />
          </TouchableHighlight>
          </View>
    );
    }
}
const styles = StyleSheet.create({
   
});

