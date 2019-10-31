import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Colors } from "../constants";



export default class CustomInputText extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataValue : this.props.list
    }
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {   
      return( 
        <TouchableOpacity onPress={() => this.openmodal(item,this.props.isdata)} style={styles.item}>        
          <ListItem
            style={styles.ls}
            title={<Text style={styles.title}>{item.name}</Text>}
            subtitle={<Text style={styles.subtitle}>{(item.value == "")? '-': item.value}</Text>}
            rightIcon={!item.readonly ? { name: "edit" } : {}}
            hideChevron={true}
          />
          
        </TouchableOpacity>
      );
  }

  render() {
    return (     
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        renderItem={this.renderItem}       
      />
    );
  }

  //create modal for show Edit input
  openmodal(item,formname) {
    console.log('formname is : '+ formname);
    if (!item.readonly) {
      this.props.getprops.navigation.navigate('EditDataForm',{data:item, field:{'name':item.name,'id':item.id,'fromstate':this.props.fromstate}, form:formname})
    } else {
      return;
    }
  }

  textinput(data) {
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
     
    }
    
  }
}



const styles = StyleSheet.create({
  ls: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 1
  },
  title: {
    color: Colors.tabIconDefault
  },
  subtitle: {
    paddingLeft: "3%",
    color: Colors.primary,
    fontSize: 18,
    paddingTop: 2
  }
});
