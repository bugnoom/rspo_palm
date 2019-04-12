import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import { Colors}  from '../constants'

export default class EditDataForm extends React.Component {

  constructor(props){
    super(props);
  }


  static navigationOptions = ({navigation}) => ({
  
      headerTitle: navigation.getParam('field',''),
      headerLeft: <TouchableOpacity  onPress={ () => { navigation.goBack() }}><Text style={styles.buttonCancel}>Cancel</Text></TouchableOpacity>,
      headerRight: <TouchableOpacity  onPress={() => { navigation.getParam('handleUpdate')}}><Text style={styles.buttonSave}>Save</Text></TouchableOpacity>
    
  })

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.update})
  }

  update = () => {
    console.log("Update click now!!")
    alert('update success');
  }

  render() {
    console.log()
    return (
      <View>
        <Text> Edit </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonCancel:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.primary
  },
  buttonSave:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.greencolor
  }
})
