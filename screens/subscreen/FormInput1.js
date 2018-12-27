import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import { Colors, Fonts } from '../../constants';

export default class FormInput1 extends Component {

  static navigationOptions = ({navigation}) => {
    return{
      title: navigation.getParam('sitename', ''),
    }
  }

  constructor(props){
    super(props);
    const { navigation } = this.props
    const pagename = JSON.parse(navigation.getParam('data', ''));
    this.props.navigation.setParams({sitename: pagename[0]});
  }
   

  render() {
  
    return (
      <View style={styles.container}>
        <ScrollView ScrollContentStyle={styles.constainer}>
        <Text> Form Input for ประวัติแปลงปลูก  </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
})
