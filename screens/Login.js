import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import {URL} from '../constant/API'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox=true

export default class Login extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      login_email: "",
      login_password: "",
      register_email:"",
      register_password: "",
    }

  } 
  triggerLogin = () => {
    this.props.navigation.navigate("MainScreen")
  }

  submit = () => {
    let login_email = this.state.login_email
    let login_password = this.state.login_password
    let type = this.state.type

    if (login_email == "" && login_password == "") {
      Alert.alert(
        "Sorry",
        " E-mail and Password is required",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK" }
        ],
        { cancelable: false }
      );
    }

    if (login_email != "" && login_password == "") {
      Alert.alert(
        "Sorry",
        "Password is required",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK" }
        ],
        { cancelable: false }
      );
    }
    if (login_email == "" && login_password != "") {
      Alert.alert(
        "Sorry",
        "E-mail is required",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK" }
        ],
        { cancelable: false }
      );
    }
    if (login_email != "" && login_password != "") {

      console.log(login_email + "---" + login_password)
      fetch(URL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": login_email,
          "password": login_password,
      
        })
      })
        .then(res => res.json())
        .then(async response => {
          console.log("Restaurant_Login");
          console.log(response);
          if (response.success == true) {
            // alert("OK")
            AsyncStorage.setItem("userID", JSON.stringify(response));
            // Alert.alert(
            //   "Success",
            //   response.message,
            //   [
            //     { text: "OK" }
            //   ],
            //   { cancelable: false }
            // );
            this.props.navigation.push("MainScreen");

          }
          else {
            Alert.alert(
              "Sorry",
              response.message,
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK" }
              ],
              { cancelable: false }
            );
          }


        })
        .catch(error => {
          console.log(error)
          alert("Please check internet connection");
        });

    }

  }





  render() {

    return (
    <View style={{ width:screenWidth,height:screenHeight , alignItems: "center",backgroundColor:"#fbfbfb" }}>

      <View style={{marginTop: 40,marginRight:10,}}>
      <Image source={require('../assets/logo.png')} />
      </View>

      <View style={{ width: "80%",  flexDirection:"row"}}>
      <TouchableOpacity style={{ width: "50%",   }}>
          <Text style={{ fontWeight: "bold", fontSize: 19,  borderBottomWidth: 4,borderBottomColor: '#FF0000' }}>Login </Text>
        </TouchableOpacity>

<TouchableOpacity style={{ width: "50%",borderBottomWidth: 4,borderBottomColor: '#DADA10' }} onPress={() => this.props.navigation.navigate("Signup")} >
            <Text style={{ fontSize: 19, fontWeight: "bold",textAlign:'right' }}>Sign up</Text>
        </TouchableOpacity>
        
        
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 50 }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#EBEBEB", paddingVertical: 5, flexDirection: "row",borderRadius:80,backgroundColor: "#393939", }}>
            <View style={{ width:"30%",position:"absolute",bottom:0,zIndex:900}}>
              <View style={{width:"90%"}}>
                <TouchableOpacity style={styles.logout_button}>
                <Ionicons name="md-mail-sharp" size={14} color="#FFFFFF" />

                </TouchableOpacity>

              </View>
            

            </View>
            <View style={{ width: "100%" }}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#FFFFFF', fontSize: 16, marginHorizontal: 33, fontWeight: "bold" }}
                placeholder={"Email Address"}
                placeholderTextColor="#FFFFFF"
                onChangeText={(login_email) => this.setState({ login_email })}
                value={this.state.login_email}
              />
            </View>

          </View>
        </View>
       
        <View style={{ width: "100%", alignItems: "center", alignContent: "center" }}>
          <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#EBEBEB", paddingVertical: 5, flexDirection: "row",borderRadius:80,backgroundColor: "#393939", }}>
          <View style={{ width: "30%", position: "absolute", bottom: 0 ,zIndex:900}} >
          <View style={{ width: "90%"}}>
          <TouchableOpacity style={styles.SignUp_button} >
          <Ionicons name="lock-closed-sharp" size={14} color="#FFFFFF" />
          </TouchableOpacity>
          </View>
          </View>
            <View style={{ width: "100%" }}>
              <TextInput
                style={{ color: '#FFFFFF', fontSize: 16, marginHorizontal: 33, fontWeight: "bold" }}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#FFFFFF"
                onChangeText={( login_password) => this.setState({  login_password })}
                value={this.state. login_password}
              />
            </View>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center" }}>
        <View style={{width:"80%",paddingBottom:20,paddingLeft:5,marginTop:15,}}>

        <TouchableOpacity style={{width: "100%", marginTop:10, paddingVertical:8, backgroundColor: "#393939", borderRadius:20, alignItems:"center",}} onPress={() => this.submit()}>
        
            <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Log In</Text>
       
        </TouchableOpacity>
        </View>
        </View>
        <View style={{ width: "100%",  }}>
          <View style={{width:"50%", marginLeft:"auto"}}>
          <TouchableOpacity style={{ fontWeight: "bold", fontSize: 9,  marginLeft:60,  }}onPress={() => this.props.navigation.navigate("forgot_password")}> 
          <Text style={{ color: '#393939', alignItems: "center",  fontSize: 12, fontWeight: "bold",textDecorationLine:"underline" }}>Forgot Password </Text>
           </TouchableOpacity>

          </View>

        </View>


        </View>
        
    );
  }
}
const styles = StyleSheet.create({
  
  SignUp_button: {
    width: 30,
    height:30,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#FF0000",
    borderRadius: 50,
    borderColor: "#FF0000"
  },
  logout_button:{
    width:30,
    height:30,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#FF0000",
    borderRadius: 15,
    borderColor: "#FF0000"

  }
});