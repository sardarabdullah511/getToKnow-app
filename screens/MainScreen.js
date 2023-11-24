import React, { Component, Profiler,useState, useEffect } from 'react';
import {
  View,LogBox, Card,CardItem,Linking, Thumbnail,Body,Left,Right,Button,Icon, Text,Pressable,pickImage,image, Platform,TouchableHighlight,FontAwesome, TouchableWithoutFeedback , KeyboardAvoidingView,TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert,Modal, SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {URL , IMAGE_URL} from '../constant/API'
import {Footer} from './Footer';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, EvilIcons, MaterialIcons,AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Container } from 'native-base';

import { style } from 'dom-helpers';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
LogBox.ignoreAllLogs(true)





export default class MainScreen extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      started: false,
      modalVisible: false,
      login_email: "",
      user_text:"",
      login_username: "",
      register_bio:"",
      store_image:"",
      user_id:"",
      record:[]
      
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
      this.get_record();
      this.interval();

    });
  }

   pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);
this.setState({store_image:result.uri})
    console.log("store_image")
    console.log(this.state.store_image)
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  get_record = () => {
   
    fetch(URL + "record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then(res => res.json())
      .then(async response => {
        
        if (response.success == true) {
        this.setState({record:response.data})
       
        }
        else {
          Alert.alert(
            "Error",
            response.message,
            [

              { text: "OKk" }
            ],
            { cancelable: false }
          );
        }
      }
      )
      .catch(error => {
        console.log("------------------------")
        // alert(error)

         console.log("Please check internet connection");
      });

  }

  interval = () => {

    this.intervalState = setInterval(async () => {
      this.get_record();

    }, 5000);
  }
  add_post = () => {
    const photo = {
      uri: this.state.store_image,
      type: "image/jpeg",
      name: ".jpeg",
    };
   
    const formData = new FormData();
      formData.append('file', photo)
      formData.append('description', this.state.user_text)
      formData.append('user_id', this.state.user_id)
   console.log("formData")
   console.log(formData)
   
    fetch(URL + "post", {
      method: "POST",
    body:formData
      
    })
      .then(res => res.json())
      .then(async response => {
        console.log("post");
        console.log(response);
        if (response.message == "product added successfully") {
      this.setModalVisible(false)
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
    const { modalVisible } = this.state;
    return (
      
    <View style={{ width:screenWidth,height:screenHeight , alignItems: "center",backgroundColor:"#FFFFFF",paddingBottom:15 }}>
 <View style={{ width: "100%", marginTop:50, }}>
        <View style={{width:"80%", alignContent:'center', alignItems:"center",marginLeft:42}}>
        <Text style={{ fontWeight: "bold", fontSize: 19, }}>News Feed </Text>
        </View>
        </View> 
        <View style={{ width: "100%", marginTop:5,borderTopWidth:1,borderTopColor:"#eaeaea" }}>

</View>
      <ScrollView style={{ width: "100%"}}>
    
          {this.state.record.length > 0 &&
            this.state.record.map((item, index) => {
              return (
                <View key={index} style={{ width: "100%", marginTop:5, }}>
                
        <View style={{width:"100%",marginLeft:12}}>
        <View style={{marginTop:10,flexDirection:"row",marginRight:300}}>
      <Image style={{height: 30,width: 30,borderRadius: 15,}} source={require('../assets/avatar.png')} />


      <Text style={{fontWeight: "bold", fontSize: 13,marginTop:5,marginLeft:5 ,flexDirection:"row"}}>{item.user_name} </Text>
      </View>
      </View>


      <View style={{ width: "100%", marginTop:1, }}>
      <Image style={{height: 310,width: "100%",resizeMode:"contain",borderColor:"#000",borderWidth:1}} source={{uri:IMAGE_URL+item.path}} />
      <Text style={{ fontWeight: "bold", fontSize: 15,marginLeft:25 }}>{item.description}</Text>
      <View style={{ width: "100%", marginTop:10,marginLeft:30,flexDirection:"row" }}>
        
     <View style={{ width: "100%", marginTop:5, }}>
<TouchableOpacity style={{width: "100%",   flexDirection:"row" }}onPress={() => this.props.navigation.push("Search",{post_id:item.post_id})}>
<EvilIcons name="comment" size={34} color="black" />
<Text style={{ fontWeight: "bold", fontSize: 13,marginTop:1,marginLeft:5 ,marginBottom:1}}>Suggest a place</Text>
        </TouchableOpacity>
        
        <View style={styles.listWrapper}>
        <ScrollView>
        <View style={{ width: "100%", marginTop:2, }}>
        <View style={{width:"80%",marginTop:2,}}>
        
      </View>
      </View>
      <View style={{ width: "100%", paddingLeft:50}}>
    
      {item.post_suggestions.length > 0 ?
            item.post_suggestions.map((item, i_index) => {
              return (
                <View key={i_index}>
  <View style={{width:"50%",marginTop:1,flexDirection:"row",marginLeft:2}}>
      <Image style={{height: 20,width: 20,borderRadius: 10,}} source={require('../assets/avatar.png')} />
      <Text style={{ fontWeight: "bold", fontSize: 9,marginTop:5,marginLeft:5 }}> {item.user?.first_name} {item.user?.last_name}</Text>
      </View>
                <TouchableOpacity  style={{width:"75%",marginLeft:27}} onPress={() => {
                    // var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                    // var url = "https://www.google.com/maps/dir/"+item.latitude+item.longitude/item.latitude+item.longitude;
                    Linking.openURL( Platform.OS == "android" ? `geo:0,0?q=${item.latitude},${item.longitude}` : `maps://0,0?q=${item.latitude},${item.longitude}`)
                    // var url = `https://www.google.com/maps/dir/31.4878177,74.3083437/@31.4856127,74.3032797`;
                    // Linking.openURL(`geo:0,0?q=31.486538, 74.321437`)
                }}>
                <Text style={{color: '#0000FF',fontSize: 9, marginTop:1,textDecorationLine:"underline"  }} >
 {item.suggestion}
                </Text>

                </TouchableOpacity>

                </View>
              
              )}):null}
 
</View>

      </ScrollView>
      
      </View>
        </View>
      </View>
      </View>
                </View>
       
              )
            })}
</ScrollView>

<View style={{position: 'absolute', left: 0, right: 0, bottom: 0,paddingVertical:15,flexDirection:"row",width:"100%",backgroundColor:"#777"}}>
          <TouchableHighlight style={{width:"10%",marginLeft:30}} onPress={() => this.props.navigation.navigate("MainScreen")}>


          <Image style={{height: 30,width: 30,}} source={require('../assets/home.png')} />
          </TouchableHighlight>
          <View style={{width:"10%",marginLeft:120}} onPress={() => this.props.navigation.navigate("")}>
          <Image style={{height: 30,width: 30,borderRadius: 15,}} source={require('../assets/add.png')} />
          </View>
          <TouchableHighlight style={{width:"10%",marginLeft:120}} onPress={() => this.props.navigation.navigate("Profile")}>
          <Image style={{height: 30,width: 30,borderRadius: 15,}} source={require('../assets/account.png')} />
          </TouchableHighlight>
          </View>
    
   





   
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        
        >
          <View style={styles.centeredView}>
        
            <View style={styles.modalView}>
              {this.state.store_image?(
                <View style={{}}>
                  <TouchableHighlight style={{width:"10%",marginLeft:10}} onPress={() => this.setModalVisible(false)}>
          <Image style={{height: 30,width: 30}} source={require('../assets/cancel.png')} />
          </TouchableHighlight>
              <Image style={{height: 200,width: 200,borderRadius: 100,borderWidth:3,borderColor:"#f0f8"}} source={{ uri: this.state.store_image }}  />
              <View style={{width:"80%",position:"absolute",marginLeft:10}}>
            <TouchableHighlight style={{height:40,width:40,marginLeft:140,marginTop:165, borderWidth:2,borderRadius:20,backgroundColor:"#f0f8ff",borderColor:"#f0f8"}}onPress={() => this.pickImage()}>
          <Image style={{height: 20,width: 20,marginLeft:9,marginTop:8}} source={require('../assets/camera.png')} />
          </TouchableHighlight>
          </View>
          </View>
              ):(
                <>
                <View style={{}}>
                   <TouchableHighlight style={{width:"15%",marginLeft:150,}}  onPress={() => this.setModalVisible(false)}>
          <Image style={{height: 30,width: 30,}} source={require('../assets/cancel.png')} />
          </TouchableHighlight>
          </View>
                <View style={{height: 200,width: 200,borderRadius: 100,borderWidth:3,borderColor:"#f0f8ff"}}  />
                 <View style={{width:"80%",position:"absolute",marginLeft:10}}>
               <TouchableHighlight style={{height:40,width:40,marginLeft:140,marginTop:200, borderWidth:2,borderRadius:20,backgroundColor:"#f0f8ff",borderColor:"#f0f8ff"}}onPress={() => this.pickImage()}>
             <Image style={{height: 20,width: 20,marginLeft:9,marginTop:8}} source={require('../assets/camera.png')} />
             </TouchableHighlight>
             </View>
                </>

              )}
            



          
           
            
              <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop:8  }}>
        <View style={{ width: "90%",   borderBottomWidth: 1, marginTop:5, borderBottomColor:"#000000"}}>
        <TextInput
              keyboardType="email-address"
                style={{ color: "#000000", fontSize: 16,  }}
                placeholder={"Add Caption"}
                placeholderTextColor="#AAAAAA"
                onChangeText={(user_text) => this.setState({ user_text })}
                value={this.state.user_text}/>
          </View>
        </View>
        <TouchableOpacity style={{width: "30%", marginTop:10, paddingVertical:10, backgroundColor: "#393939", borderRadius:20, alignItems:"center",}} onPress={() => this.add_post()}>
            <Text style={{ color: '#FFFFFF', alignItems: "center", marginTop: 2, fontSize: 14, fontWeight: "bold" }}>Submit</Text>       
        </TouchableOpacity>
     
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>




















       ) ;
       
    }


}

const styles = StyleSheet.create({
  centeredView: {
   width:300,
    marginLeft:60,
    marginTop: 115
  },

  modalView: {
    margin: 2,
    backgroundColor: "#DAF5F3",
    borderRadius:20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    color:"red"
  },
  buttonOpen: {
    backgroundColor: "transparent",
    height:30
  },
  
  textStyle: {
    color: "transparent",marginTop:15,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center"
  }


});
