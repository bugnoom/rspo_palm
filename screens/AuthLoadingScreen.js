import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native'

export default class AuthLoadingScreen extends Component {

    constructor() {
        super()
        this.loadApp()
    }

    loadApp = async() => {
        try{
            const logedin = await AsyncStorage.getItem('logedin');
            console.log("logedin is", logedin)
            if(logedin !== null){
                this.props.navigation.navigate('SelectSiteScreen');
            }else{
                this.props.navigation.navigate('Auth');
            }
        } catch(error){
            Alert.alert("Errors", "Error check user login please login agin");
        }
    }

  render() {
    return (
        <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    contentcontainer:{
        paddingTop:30
    }
})
