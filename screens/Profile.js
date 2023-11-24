import React, { Component } from 'react';
import {
  View, Text, Platform, TouchableWithoutFeedback , KeyboardAvoidingView,TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox=true

export default class Profile extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      login_email: "",
      login_username: "",
      register_bio:"",
      
    }

  }
  render() {

    return (
      
      <ScrollView style={styles.scrollView}>
    <View style={{ width:screenWidth,height:screenHeight , alignItems: "center",backgroundColor:"#FFFFFF" }}>
     <View style={{ width: "100%", marginTop:50, }}>
        <View style={{width:"80%", alignContent:'center', alignItems:"center",marginLeft:42}}>
        <Text style={{ fontWeight: "bold", fontSize: 19, }}>Profile </Text>
        </View>
        </View>
        <View style={{marginTop:10,}}>
      <Image style={{height: 120,width: 120,borderRadius: 60}} source={require('../assets/avatar.png')} />
      </View>

      <TouchableOpacity style={{width: "100%", marginTop:10, paddingVertical:10,  alignItems:"center",}} onPress={() => this.register()}>
            <Text style={{ color: '#000000', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Change Profile Photo</Text>       
        </TouchableOpacity>










<View style={{ width: "100%", marginTop:30, }}>
        <View style={{width:"80%", alignContent:'center',marginLeft:57}}>
        <Text style={{ fontWeight: "bold", fontSize: 19}}>Name </Text>
        </View>
        </View>
<View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop:8  }}>
        <View style={{ width: "70%",  backgroundColor: "#FFFFFF", borderBottomWidth: 1, marginTop:5, borderBottomColor:"#000000"}}>
        <TextInput
              keyboardType="email-address"
                style={{ color: "#000000", fontSize: 16,  }}
                placeholder={"Enter Name"}
                placeholderTextColor="#AAAAAA"
                onChangeText={(login_email) => this.setState({ login_email })}
                value={this.state.login_email}/>
          </View>
        </View>
        <View style={{width:"100%", marginTop:10,}}>
          <View style={{width:"80%",alignContent:'center',marginLeft:55, marginTop:5}}>
            <Text style={{fontWeight:"bold",fontSize:19}}>User Name</Text>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center",  }}>
        <View style={{ width: "70%",  backgroundColor: "#FFFFFF", borderBottomWidth: 1, borderBottomColor:"#000000", marginTop:5}}>
        <TextInput
              keyboardType="email-address"
                style={{ color: "#000000", fontSize: 16,  marginTop:5}}
                placeholder={"Enter Username"}
                placeholderTextColor="#AAAAAA"
                onChangeText={(login_username) => this.setState({ login_username })}
                value={this.state.login_username}/>
          </View>
        </View>
        <View style={{width:"100%", marginTop:10,}}>
          <View style={{width:"80%",alignContent:'center',marginLeft:55, marginTop:5}}>
            <Text style={{fontWeight:"bold",fontSize:19}}>Bio</Text>
          </View>
        </View>
        <View style={{width: "100%", alignContent: "center", alignItems: "center"}}>
          <View style={{width: "70%", backgroundColor: "#FFFFFF", borderBottomWidth: 1, borderBottomColor: "#000000", marginTop:5}}>
        <TextInput
        keyboardType="email-address"
        style={{ color: '#000000', fontSize: 16, marginTop:5  }}
        placeholder={"Change Bio"}
        placeholderTextColor="#AAAAAA"
        onChangeText={(register_bio) => this.setState({ register_bio })}
        value={this.state.register_bio}/>

        </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center" }}>
        <View style={{width:"50%",paddingLeft:1,marginTop:25,}}>

        <TouchableOpacity style={{width: "100%", marginTop:10, paddingVertical:10, backgroundColor: "#393939", borderRadius:20, alignItems:"center",}}onPress={() => this.props.navigation.navigate("MainScreen")}>
            <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 19, fontWeight: "bold" }}>Update</Text>       
        </TouchableOpacity>
        </View>
        </View>
       
        



        </View>
        </ScrollView>
    
        
    );
  }
}
const styles = StyleSheet.create({
  
  
});