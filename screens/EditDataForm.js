import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Picker} from 'react-native'
import { Colors}  from '../constants'
import  DatePicker  from 'react-native-datepicker'

export default class EditDataForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : this.props.navigation.getParam('data'),
      value : this.props.navigation.getParam('data').value,
      selectvalue : this.props.navigation.getParam('data').selectedvalue
    }
  }


  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
      headerTitle: navigation.getParam('field',''),
      headerLeft: <TouchableOpacity  onPress={ () => { navigation.goBack() }}><Text style={styles.buttonCancel}>Cancel</Text></TouchableOpacity>,
      headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonSave}>Save</Text></TouchableOpacity>
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.update})
  }

  update = () => {
    console.log("Update click now!!", this.state.selectvalue)
    alert('update success');
  }

  textinput(data){
    switch(data.type){
      case 'text':
      return(
        <TextInput value = {this.state.value}
        style={{width:'100%', height:60, borderBottomWidth:1, borderBottomColor:'#cccccc', padding:10}}
        editable={true}
        clearButtonMode='always'
        onChangeText={(value) => this.setState({value})}
        autoFocus={true}
        />
      )
      break;
      case 'selectbox':
      return(
        <Picker
          selectedValue={this.state.selectvalue}
          style={{width:'100%', height:100}}
          onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}
        >
        {
          this.state.data.selectlist.map( (v) =>{
            return <Picker.Item key={v.id} label={v.value} value={v.id} />
          })
        }
          
        </Picker>
      )
      break;
      case "datetime":
      return(
        <DatePicker
            style={{width: '90%', marginTop:10 }}
            date={this.state.selectvalue}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY" 
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({selectvalue: date})}}
        />
      )
      break;
      case "textarea":
          return(
            <TextInput value = {this.state.value}
              style={{width:'100%',height:90, borderBottomWidth:1, borderBottomColor:'#cccccc', padding:10}}
              editable={true}
              clearButtonMode='always'
              onChangeText={(value) => this.setState({value})}
              autoFocus={true}
              numberOfLines = {5}
              multiline={true}
              placeholder={this.state.data.placeholder}
              />
          )
      break;
    }
    
  }

  pickerChange(index){
    this.state.data.selectlist.map( (v,i)=>{
      if( index === i ){
        this.setState({
          selectvalue: this.state.data.selectlist[index].id,
       })
      }
     })
  }


  render() {
    console.log()
    return (
      <View style={styles.container}>
        {this.textinput(this.state.data)}
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    fontSize:17
    
  },
  buttonCancel:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.primary
  },
  buttonSave:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.greencolor
  },
  inputText:{
    
  },
})
