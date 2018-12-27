import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button, TextInput, Alert, TouchableOpacity, AsyncStorage} from 'react-native'
import { testData } from './../services/DataService';
import { Colors } from '../constants'

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.checkLogedIn();
    }
    

    checkLogedIn = async() =>{
        try{
            const logedin = await AsyncStorage.getItem('logedin');
            if(logedin !== null){
                this.props.navigation.navigate('SelectSiteScreen');
            }
        } catch(error){
            Alert.alert("Errors", "Error check user login please login agin");
        }
      
    }

    Logedin = async() => {
        await AsyncStorage.setItem('logedin', 'Y')
    }

    onLogin(){
        const { username, password } = this.state;
       console.log('test data is:', testData.data.login.username + ' == ' + username)
        // const data = () => {return testData};
                if(testData.data.login.username == username && testData.data.login.password == password){
                   this.Logedin();
                    this.props.navigation.navigate('SelectSiteScreen')
                }else{
                    Alert.alert("Login",'Invalid Login please check username and password ');
                }
    }

    forgotpass(){
        this.props.navigation.navigate('ForgotPassScreen');
       
    }

  render() {
    return (
      <View style={styles.container}>
       
            <Text style={styles.headtext}> Login </Text>
            <View style={{margin:15}} />
            <TextInput placeholder='Username' style={styles.inputText} onChangeText={(username) => this.setState({username})} />
            <TextInput placeholder='Password' style={styles.inputText} onChangeText={(password) => this.setState({password})} secureTextEntry={true} />

            <TouchableOpacity style={styles.loginScreenButton} onPress={this.onLogin.bind(this)} underlayColor='#fff'>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={this.forgotpass.bind(this)}  style={styles.forgotpassword} ><Text style={{color:Colors.primary, margin: 10}} >Forgotpassword</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    forgotpassword:{
        alignItems: 'center'
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
        fontSize: 16
    },
    containerview:{
        flex: 1,
    },
    inputText:{
        width: 330 ,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 10
    },
    loginScreenButton:{
        width:300,
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
    headtext:{
        fontSize: 27,
        fontWeight: "700",
        textAlign:'center'
    },
    contentcontainer:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    }
})