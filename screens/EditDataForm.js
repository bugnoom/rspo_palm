import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Picker, ActivityIndicator} from 'react-native'
import { Colors}  from '../constants'
import  DatePicker  from 'react-native-datepicker'
import { updateSiteDetail,updateBasicInfomation,updatePlamspaceInfo } from '../services/DataService'
import Moment from 'moment';


export default class EditDataForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : this.props.navigation.getParam('data'),
      value : this.props.navigation.getParam('data').value,
      selectvalue : this.props.navigation.getParam('data').selectedvalue,
      form : this.props.navigation.getParam('form'),
      field : this.props.navigation.getParam('field').id,
      fromstate : this.props.navigation.getParam('field').fromstate,
      isLoading: false
    }
  }


  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
      headerTitle: navigation.getParam('field','').name,
      headerLeft: <TouchableOpacity  onPress={ () => { navigation.goBack() }}><Text style={styles.buttonCancel}>Cancel</Text></TouchableOpacity>,
      headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonSave}>Save</Text></TouchableOpacity>
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.update})
    console.log('value data is ', this.state.data)
  }

  update = () => {
    var formname = this.state.form;
    this.setState({isLoading: true})
    console.log("Update click now!!", this.state.fromstate)
   switch(this.state.fromstate){
     case "1":
       let siteDataPayload={
        "id":formname.id,
        "state":1,
        "name": (this.state.field == "name"? this.state.value: formname.name),
        "code": (this.state.field == "code"? this.state.value: formname.code),
        "rspocode":(this.state.field == "rspocode"? this.state.value: formname.rspocode),
        "address": (this.state.field == "address"? this.state.value: formname.address), 
        "type":(this.state.field == "type"? this.state.value: formname.type),
        "yearin":(this.state.field == "yearin"? this.state.value: formname.yearin), 
        "area":(this.state.field == "area"? this.state.value: formname.area), 
        "num":(this.state.field == "num"? this.state.value: formname.num), 
        "dead":(this.state.field == "dead"? this.state.value: formname.dead), 
        "growback":(this.state.field == "growback"? this.state.value: formname.growback), 
        "yeargrow":(this.state.field == "yeargrow"? this.state.value: formname.yeargrow), 
        "solutiongrow":(this.state.field == "solutiongrow"? this.state.value: formname.solutiongrow), 
        "reasondead":(this.state.field == "reasondead"? this.state.value: formname.reasondead), 
        "detailarea":(this.state.field == "detailarea"? this.state.value: formname.detailarea), 
        "benefitother":(this.state.field == "benefitother"? this.state.value: formname.detailarea), 
        "conserve":(this.state.field == "conserve"? this.state.value: formname.conserve), 
        "datein": (this.state.field == "datein" ? this.convertdate(this.state.selectvalue): this.convertdate(formname.datein))
       }
      updateSiteDetail(siteDataPayload).then(
        (result) => {
          this.successdata(formname);
        }
      );
      
      break;
     case "2":
       let basicdataPayload={
        "id": formname.id,
        "state" : 2,
        "statesoil": (this.state.field == "statesoil" ? this.state.value: formname.statesoil),
        "typearea" : (this.state.field == "typearea" ? this.state.value: formname.typearea),
        "typeareamark": (this.state.field == "typeareamark" ? this.state.value: formname.typeareamark),
        "typesoil": (this.state.field == "typesoil" ? this.state.value: formname.typeoil),
        "typesoilother": (this.state.field == "typesoilother" ? this.state.value: formname.typesoilother),
        "plantingarea": (this.state.field == "plantingarea" ? this.state.value: formname.plantingarea),
        "plantingareaother": (this.state.field == "plantingareaother"? this.state.value: formname.plantingareaother),
        "soilconservation": (this.state.field == "soilconservation" ? this.state.value: formname.soilconservation),
        "soilconservationother": (this.state.field == "soilconservationother" ? this.state.value: formname.soilconservationother),
        "wateringmethod": (this.state.field == "wateringmethod" ? this.state.value: formname.wateringmethod),
        "sourcewater": (this.state.field == "sourcewater" ? this.state.value: formname.sourcewater),
        "usebefore": (this.state.field == "usebefore" ? this.state.value: formname.usebefore),
        "pattern": (this.state.field == "pattern" ? this.state.value: formname.pattern),
        "phase": (this.state.field == "phase" ? this.state.value: formname.phase),
        "harvesting": (this.state.field == "harvesting" ? this.state.value: formname.harvesting),
        "harvestingother": (this.state.field == "harvestingother" ? this.state.value: formname.harvestingother)
       }
       updateBasicInfomation(basicdataPayload).then(
         (result) => {
            this.successdata(formname);
         }
       )
       break;
     case "3":
       let plamsdataPayload={
        "id": formname.id,
        "state": 3,
        "originsoil": (this.state.field == "originsoil" ? this.state.value : formname.originsoil),
        "originsoilother": (this.state.field == "originsoilother" ? this.state.value : formname.originsoilother),
        "kindsoil": (this.state.field == "kindsoil" ? this.state.value : formname.kindsoil),
        "kindsoilcompany": (this.state.field == "kindsoilcompany" ? this.state.value : formname.kindsoilcompany),
        "choosesoil": (this.state.field == "choosesoil" ? this.state.value : formname.choosesoil),
        "oldsoil": (this.state.field == "oldsoil" ? this.state.value : formname.oldsoil)
       }
       updatePlamspaceInfo(plamsdataPayload).then(
         (result) => {
           this.successdata(formname);
         }
       )
       break;
   }
   // this.props.navigation.navigate(formname, {valuedata:this.state})
  }

  convertdate(date){
    //Moment.locale('th');
    let a = date.split('-');
    let y = parseInt(a[0]) + 543;
    //let d = y + "/" + a[1] + "/" + a[2];
    let d = a[2] + "/" + a[1] + "/" + y;
    console.log(d);
    return d;
    //"01/05/2560"
    
  }

  successdata(formname){
    this.setState({isLoading: false})
    console.log("formis", formname);
        //alert('update success');
        this.props.navigation.goBack()
      
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
            format="YYYY-MM-DD"
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

  pickerChange(index){
    this.state.data.selectlist.map( (v,i)=>{
      if( index === i ){
        this.setState({
          selectvalue: this.state.data.selectlist[index].id,
          value : this.state.data.selectlist[index].id
       })
      }
     })
  }


  render() {
    console.log()
    return (
      
      <View style={styles.container}>
        {this.textinput(this.state.data)}
        {
            this.state.isLoading ?  <View style={styles.activityContainer}><ActivityIndicator size="large" color="#00ff00" animating={true}/></View> : null
          }
      </View>
      
    )
  }
}




const styles = StyleSheet.create({
  activityContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    backgroundColor: 'black',
           
  },
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
