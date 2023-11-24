import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import {URL} from '../constant/API'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class Signup extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      first_name: "", 
      last_name: "",  
      login_email: "",
      login_password: "",
      register_date:"",
      confirm_password: "",
    }

  }
  triggerLogin = () => {
    this.props.navigation.navigate("MainScreen")
  }

  signup = () => {
    let first_name = this.state.first_name;
    let last_name = this.state.last_name;
    let login_email = this.state.login_email;
    let login_password = this.state.login_password;
    let register_date = this.state.register_date;
    let confirm_password = this.state.confirm_password;
   
    fetch(URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "first_name": first_name,
        "last_name": last_name,
        "date_time": register_date,
        "email": login_email,
        "password": login_password,
        "confirm_password": confirm_password
      })
    })
      .then(res => res.json())
      .then(async response => {
        console.log("signup_rider");
        console.log(response);
        if (response.success == true) {
         this.props.navigation.push("Login")
        }
        else {
          Alert.alert(
            "Error",
            response.message,
            [

              { text: "OK" }
            ],
            { cancelable: false }
          );
        }
      }
      )
      .catch(error => {
        console.log("------------------------")
        alert(error)

         console.log("Please check internet connection");
      });

  }













  render() {

    return (
      
    <View style={{ width:screenWidth,height:screenHeight,backgroundColor:"#F7F7F7"  }}>

      <View style={{width:"100%",}}>
      <Image style={{width:"100%",}} source={require('../assets/SCREEN41.png')} />
      
     

      <View style={{ width: "80%",height:530, alignItems:"center",alignContent:"center",marginLeft:40, marginTop:60,backgroundColor:"#FFF",borderRadius:10, position:"absolute",}}>
     
       
      <View style={{ width: "100%",marginTop:1,backgroundColor:"black",borderRadius:10}}>
        <View style={{width: "100%",  backgroundColor: "#FFFFFF",borderRadius:8,alignContent:"center",alignItems:"center" }}>
            <Text style={{ color: '#393939',  marginTop: 1, fontSize: 22, fontWeight: "bold",position:"absolute" }}>Sign Up</Text>
        </View>
        </View>
      <View style={{ width: "100%",marginTop:40, }}>
      
          <Text style={{  fontSize: 16, color:"#B2C2D2",textAlign:"center" }}>Please Sign up to create account </Text>
      
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 30,justifyContent:"center" }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8,  flexDirection: "row", }}>
            <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,alignItems: "center",alignContent: "center",justifyContent:"center"}}>
                
                <Ionicons name="person-outline" size={17} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%" ,justifyContent:"center"}}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#393939', fontSize: 16,  fontWeight: "bold" }}
                placeholder={"First Name "}
                placeholderTextColor="#B2C2D2"
                onChangeText={(first_name) => this.setState({first_name })}
                value={this.state.first_name}
              />
            </View>

          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8,  flexDirection: "row", }}>
            <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,alignItems: "center",alignContent: "center",justifyContent:"center"}}>
                
                <Ionicons name="person-outline" size={17} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%" ,justifyContent:"center"}}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#393939', fontSize: 16, fontWeight: "bold" }}
                placeholder={"Last Name "}
                placeholderTextColor="#B2C2D2"
                onChangeText={(last_name) => this.setState({ last_name })}
                value={this.state.last_name}
              />
            </View>

          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8,  flexDirection: "row", }}>
        <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,alignItems: "center",alignContent: "center",justifyContent:"center"}}>
                
              <Ionicons name="md-mail-sharp" size={19} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%",justifyContent:"center" }}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#393939', fontSize: 16,  fontWeight: "bold" }}
                placeholder={"Email "}
                placeholderTextColor="#B2C2D2"
                onChangeText={(login_email) => this.setState({ login_email })}
                value={this.state.login_email}
              />
            </View>

          </View>
        </View>

        <View style={{ width: "100%", alignItems: "center", alignContent: "center",}}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8, flexDirection: "row", }}>
        <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,alignItems: "center",alignContent: "center",justifyContent:"center"}}>
                
              <Ionicons name="md-calendar-sharp" size={19} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%" ,justifyContent:"center"}}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#393939', fontSize: 16,  fontWeight: "bold" }}
                placeholder={"yyyy-mm-dd "}
                placeholderTextColor="#B2C2D2"
                onChangeText={(register_date) => this.setState({ register_date })}
                value={this.state.register_date}
              />
            </View>

          </View>
        </View>

        <View style={{ width: "100%", alignItems: "center", alignContent: "center",  }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8, flexDirection: "row", }}>
            <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,justifyContent:"center",alignItems: "center",alignContent: "center",}}>
                
              <MaterialIcons name="lock-outline" size={19} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%",justifyContent:"center" }}>
            <TextInput
                style={{ color: '#B2C2D2', fontSize: 16, fontWeight: "bold" }}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#B2C2D2"
                onChangeText={( login_password) => this.setState({  login_password })}
                value={this.state. login_password}
              />
</View>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center",  }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8, flexDirection: "row", }}>
            <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,justifyContent:"center",alignItems: "center",alignContent: "center",}}>
                
              <MaterialIcons name="lock-outline" size={19} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "80%",justifyContent:"center" }}>
            <TextInput
                style={{ color: '#B2C2D2', fontSize: 16, fontWeight: "bold" }}
                secureTextEntry={true}
                placeholder={"Confirm Password"}
                placeholderTextColor="#B2C2D2"
                onChangeText={( confirm_password) => this.setState({ confirm_password})}
                value={this.state.confirm_password}
              />
</View>
          </View>
        </View>

        
        </View>
        </View>

        <TouchableOpacity style={{width: "65%", marginTop:420,marginLeft:65, paddingVertical:10, backgroundColor: "#C93434", borderRadius:8, alignItems:"center",}}onPress={() => this.signup()} >
        
        <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Sign Up</Text>
   
    </TouchableOpacity>
    <View style={{width: "100%", position: "absolute", bottom:35,}}>
    <TouchableOpacity style={{width: "80%", alignItems:"center",flexDirection:"row" }}onPress={() => this.props.navigation.navigate("Login")}>
    <View style={{marginLeft:139}}>
                
    <FontAwesome name="arrow-left" size={20} color="#C93434" />
                
                </View>
            <Text style={{ color: '#C93434',  marginLeft: 5, fontSize: 19, fontWeight: "bold" }}>Go Back</Text>
       
        </TouchableOpacity>
        </View>
        </View>
       
    );
  }
}
const styles = StyleSheet.create({
  
  


});