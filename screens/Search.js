import React, { Component, Profiler } from 'react';
import {
  View,Card,CardItem,Linking, Thumbnail,Body,Left,Right,Button,Icon, Text, Platform, TouchableWithoutFeedback , KeyboardAvoidingView,TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal, SafeAreaView,
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Container } from 'native-base';
import {URL , IMAGE_URL} from '../constant/API'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { style } from 'dom-helpers';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox=true


export default class Search extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
  
    super(props);
    this.data=this.props.route.params
    console.log(">>>>>>>>>>DATA>>>>>>>>>>>")
    console.log(this.data.post_id)
    this.state = {
      started: false,
      login_email: "",
      login_username: "",
      register_bio:"",
      predictions_pickup:[],
      suggestion:"",
      lat:null,
      lng:null,
      user_id:"",
      post_id:this.data.post_id
      
    }

  }
  async componentDidMount() {
    AsyncStorage.getItem("userID").then(user_data => {
      const val = JSON.parse(user_data);
     
      if (val) {
        this.setState({ user_id: val.data.id,  })
      }
      console.log("user_id");
      console.log(this.state.user_id);

    });
  }
  getLocation_name = async (suggestion) => {
    this.setState({ suggestion });
    const apiUrl =
      "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAZO-tKQkZy9E0hCiV8iEKvsazcBNH4evI&input=" + suggestion
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({ lat: json.results[0].geometry.location.lat, lng: json.results[0].geometry.location.lng });
      console.log(this.state.lat)
      console.log(this.state.lng)
    } catch (err) {
      this.setState({ status: true })
    }
  };

  onChangePickup = async suggestion => {
    this.setState({ suggestion });
    const apiUrl =
      "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAZO-tKQkZy9E0hCiV8iEKvsazcBNH4evI&input=" + suggestion
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({ predictions_pickup: json.predictions });

    } catch (err) {
      this.setState({ status: true })
      alert("We Do not operate in this area")
    }

  };
  submit_suggestion = () => {
    console.log(this.state.user_id)
    console.log(this.state.suggestion)
    console.log(this.state.lat)
    console.log(this.state.lng)
    console.log(this.state.post_id)
      fetch(URL + "suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": this.state.user_id,
          "suggestion": this.state.suggestion,
          "latitude": this.state.lat,
          "longitude":this.state.lng,
          "post_id": this.state.post_id,
      
        })
      })
        .then(res => res.json())
        .then(async response => {
          console.log("Restaurant_Login");
          console.log(response);
          if (response.success == true) {
            Alert.alert(
              "Success",
              "The suggestion has been submitted successfully",
              [
                { text: "OK" }
              ],
              { cancelable: false }
            );
            this.props.navigation.push("MainScreen");

          }
          else {
            Alert.alert(
              "Sorry",
              "Please try again",
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

  render() {

    return (
      
    <View style={{ width:screenWidth,height:screenHeight , alignItems: "center",backgroundColor:"#FFFFFF" }}>
 <View style={{ width: "100%", marginTop:50, }}>
        <View style={{width:"80%", alignContent:'center', alignItems:"center",marginLeft:42}}>
        <Text style={{ fontWeight: "bold", fontSize: 19, }}>Suggest a place </Text>
        </View>
        </View> 
        <View style={{ width: "100%", marginTop:5,borderTopWidth:1,borderTopColor:"#eaeaea" }}></View>
      <ScrollView style={{ width: "100%"}}>
    
      <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 0 }}>
        <View style={{ width: "80%", margin: 8, borderWidth: 2, borderColor: "#EBEBEB", paddingVertical: 5, flexDirection: "row",backgroundColor: "#FFFF", }}>
            <View style={{ width:"30%",position:"absolute",bottom:0,zIndex:900}}>
              <View style={{width:"90%"}}>
                <TouchableOpacity style={{marginLeft:10,marginBottom:5}}>
                <Ionicons name="md-search-sharp" size={25} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <TextInput
              keyboardType="email-address"
                style={{ color: '#000', fontSize: 16, marginHorizontal: 50, fontWeight: "bold" }}
                placeholder={"Search"}
                placeholderTextColor="#000"
                onChangeText={(suggestion) => this.onChangePickup(suggestion)}
                value={this.state.suggestion}
              />
            </View>
          </View>
        </View>
        
        {/* <TouchableOpacity style={{width: "95%", marginTop:2, paddingVertical:10,borderBottomColor:"#eaeaea",borderBottomWidth:1}} onPress={() => this.props.navigation.navigate("profile")}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: "bold" ,textAlign:"left",marginLeft:15}}>KFC  MODEL TOWN</Text>       
        </TouchableOpacity> */}
        {this.state.predictions_pickup ? (

<View style={{ width: "100%" }}>
  <ScrollView style={{ width: "100%" }}>

    {this.state.predictions_pickup.length > 0 ?
      this.state.predictions_pickup.map((item, index) => {
        return (
      <TouchableOpacity style={{width: "100%", paddingVertical:10,borderBottomColor:"#eaeaea",borderBottomWidth:1,flexDirection:"row",padding:5}}
          key={index} onPress={() => {
            this.setState({ suggestion: item.description, predictions_pickup: [] })
            this.getLocation_name(item.description)
          }}
          >
            <View style={{paddingHorizontal:5}}>
              <Ionicons name="ios-location-sharp" size={12} color="#B2C2D2" />
            </View>
            <View >

              <Text
                style={{
                  fontSize: 12,
                 
                }}
              >
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>

        )

      }) : null}
  </ScrollView>


  <View style={{ width: "100%", alignItems: "flex-end",marginTop:50, alignContent: "flex-end" }}>
        <View style={{width:"20%",paddingBottom:20,marginTop:15,marginRight:40}}>
        <TouchableOpacity style={{width: "100%", marginTop:10, paddingVertical:8, backgroundColor: "#393939", borderRadius:50, alignItems:"center",}}
        onPress={()=>this.submit_suggestion()}
        >
            <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 16, fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
        </View>
        </View>

</View>
) : null}
      </ScrollView>
        </View>
        
    );
    }
}
const styles = StyleSheet.create({
  
  listWrapper:{
    // flex:1,
    // flexGrow:1,
    width:'100%',
    height:110,
},
});