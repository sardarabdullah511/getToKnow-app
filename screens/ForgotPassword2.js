import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class ForgotPassword2 extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      
      login_code_1: "",
      login_code_2: "",
      login_code_3: "",
      login_code_4: "",
     
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
     
       
      <View style={{ width: "100%",marginTop:49,backgroundColor:"black",borderRadius:10,}}>
        <View style={{width: "100%",  backgroundColor: "#FFFFFF",borderRadius:8,alignContent:"center",alignItems:"center" }}>
            <Text style={{ color: '#393939',  marginTop: 1, fontSize: 22, fontWeight: "bold",position:"absolute" }}>CODE VERIFICATION</Text>
        </View>
        </View>
      <View style={{ width: "100%",marginTop:60, }}>
      
          <Text style={{  fontSize: 17, color:"#B2C2D2",textAlign:"center",fontWeight:"bold" }}>Enter one time code sent on 'Email' </Text>
      
        </View>
       
        <View style={{ width: "100%", alignItems: "center", alignContent: "center",marginTop:10 , flexDirection: "row",justifyContent:"center" }}>
        <View style={{ width: "15%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:3}}>
            <View style={{ width: "60%",justifyContent:"center" }}>
              <TextInput
              keyboardType="email-address"
              style={{ color: '#393939', fontSize: 16, fontWeight: "bold",justifyContent:"center",textAlign:"center" }}
                placeholder={" C"}
                placeholderTextColor="#B2C2D2"
                onChangeText={(login_code_1) => this.setState({ login_code_1 })}
                value={this.state.login_code_1}
              />
            </View>
          </View>

          <View style={{ width: "15%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:3}}>
            <View style={{ width: "60%",justifyContent:"center" }}>
            <TextInput
              keyboardType="email-address"
              style={{ color: '#393939', fontSize: 16, fontWeight: "bold",justifyContent:"center",textAlign:"center" }}
                placeholder={"O"}
                placeholderTextColor="#B2C2D2"
                onChangeText={(login_code_2) => this.setState({ login_code_2 })}
                value={this.state.login_code_2}
              />
            </View>
          </View>
          <View style={{ width: "15%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:3}}>
            <View style={{ width: "60%",justifyContent:"center" }}>
            <TextInput
              keyboardType="email-address"
              style={{ color: '#393939', fontSize: 16, fontWeight: "bold",justifyContent:"center",textAlign:"center" }}
                placeholder={"D"}
                placeholderTextColor="#B2C2D2"
                onChangeText={( login_code_3) => this.setState({  login_code_3 })}
                value={this.state. login_code_3}
              />
            </View>
          </View>
          <View style={{ width: "15%", margin: 8, borderWidth: 2, borderColor: "#B2C2D2",borderRadius:3}}>
            <View style={{ width: "60%",justifyContent:"center" }}>
            <TextInput
              keyboardType="email-address"
              style={{ color: '#393939', fontSize: 16, fontWeight: "bold",justifyContent:"center",textAlign:"center" }}
                placeholder={"E"}
                placeholderTextColor="#B2C2D2"
                onChangeText={(login_code_4) => this.setState({ login_code_4 })}
                value={this.state.login_code_4}
              />
            </View>
          </View>
        </View>
        </View>
        </View>

        

        <TouchableOpacity style={{width: "65%", marginTop:280,marginLeft:65, paddingVertical:10, backgroundColor: "#C93434", borderRadius:8, alignItems:"center",}}onPress={() => this.props.navigation.navigate("ForgotPassword3")} >
        
        <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Verify Code</Text>
   
    </TouchableOpacity>
    <View style={{width: "100%", position: "absolute", bottom:30}}>
    <TouchableOpacity style={{width: "80%", alignItems:"center",flexDirection:"row" }} onPress={() => this.props.navigation.navigate("ForgotPassword")}>
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