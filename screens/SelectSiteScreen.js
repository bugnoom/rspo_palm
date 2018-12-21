import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button, BackHandler, AsyncStorage } from 'react-native'

export default class SelectSiteScreen extends Component {

    static navigationOptions = {
        title :'Select Site',
        headerLeft: null,
        gesturesEnabled: false
      };

    componentWillMount(){
        BackHandler.addEventListener('headwareBackPress', function(){
            return true;
        })
    }

    Signin = async() => {
        await AsyncStorage.setItem('userToken', 'selectsite')
        this.props.navigation.navigate('App');
    }

    logout = async() => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading')
    }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} ScrollContentStyle={styles.contentcontainer}>
        <Text> textInComponent </Text>
        <Button title="MySite1" onPress={this.Signin} />
        <Button title="Logout" onPress={this.logout} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    headtexxt:{
        fontSize: 77,
        fontWeight: "700"
    },
    contentcontainer:{
        paddingTop:30
    }
})
