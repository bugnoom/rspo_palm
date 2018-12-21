import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button} from 'react-native'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.headtext}> Loain Screen First </Text>
            <Button title="Press to Login" onPress={()=>this.props.navigation.navigate('SelectSiteScreen')} />
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