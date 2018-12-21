import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native'

export default class AuthLoadingScreen extends Component {

    constructor() {
        super()
        this.loadApp()
    }

    loadApp = async() => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken == 'selectsite'? 'SelectSiteScreen' : 'Auth')
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
