import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class ForgotPassword3 extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      old_password: "", 
      new_password: "",  
      confirm_new_password: "",
    
     
    }

  }
  triggerLogin = () => {
    this.props.navigation.navigate("MainScreen")
  }
  render() {

    return (
      
    <View style={{ width:screenWidth,height:screenHeight,backgroundColor:"#F7F7F7"  }}>

      <View style={{width:"100%",}}>
      <Image style={{width:"100%",}} source={require('../assets/SCREEN41.png')} />
      
     

      <View style={{ width: "80%",height:400, alignItems:"center",alignContent:"center",marginLeft:40, marginTop:60,backgroundColor:"#FFF",borderRadius:10, position:"absolute",}}>
     
       
      <View style={{ width: "100%",marginTop:35,backgroundColor:"black",borderRadius:10,}}>
        <View style={{width: "100%",  backgroundColor: "#FFFFFF",borderRadius:8,alignContent:"center",alignItems:"center" }}>
            <Text style={{ color: '#393939',  marginTop: 1, fontSize: 22, fontWeight: "bold",position:"absolute" }}>New Credential</Text>
        </View>
        </View>
      <View style={{ width: "100%",marginTop:50, flexDirection:"column"}}>
      
          <Text style={{  fontSize: 18, color:"#B2C2D2",textAlign:"center",fontWeight:"bold" }}>Your identity has been verified! </Text>
          <Text style={{  fontSize: 18, color:"#B2C2D2",textAlign:"center",fontWeight:"bold" }}>Set your new password </Text>
        </View>

      
        <View style={{ width: "100%", alignItems: "center", alignContent: "center",marginTop:25  }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:8, flexDirection: "row", }}>
            <View style={{ width:"10%",justifyContent:"center"}}>
              <View style={{height:35,justifyContent:"center",alignItems: "center",alignContent: "center",}}>
                
              <MaterialIcons name="lock-outline" size={19} color="#B2C2D2" />
              
              </View>
            </View>
            <View style={{ width: "100%",justifyContent:"center" }}>
            <TextInput
                style={{ color: '#B2C2D2', fontSize: 16, fontWeight: "bold" }}
                secureTextEntry={true}
                placeholder={"New Password"}
                placeholderTextColor="#B2C2D2"
                onChangeText={( new_password) => this.setState({  new_password })}
                value={this.state. new_password}
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
            <View style={{ width: "100%",justifyContent:"center" }}>
            <TextInput
                style={{ color: '#B2C2D2', fontSize: 16, fontWeight: "bold" }}
                secureTextEntry={true}
                placeholder={"Confirm Password"}
                placeholderTextColor="#B2C2D2"
                onChangeText={( confirm_new_password) => this.setState({ confirm_new_password})}
                value={this.state.confirm_new_password}
              />
</View>
          </View>
        </View>
      

       
        

        
        </View>
        </View>

        <TouchableOpacity style={{width: "65%", marginTop:280,marginLeft:65, paddingVertical:10, backgroundColor: "#C93434", borderRadius:8, alignItems:"center",}}onPress={() => this.props.navigation.navigate("Login")} >
        
        <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Update</Text>
   
    </TouchableOpacity>
    <View style={{width: "100%", position: "absolute", bottom:30}}>
    <TouchableOpacity style={{width: "80%", alignItems:"center",flexDirection:"row" }} onPress={() => this.props.navigation.navigate("ForgotPassword2")}>
    <View style={{marginLeft:130}}>
                
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