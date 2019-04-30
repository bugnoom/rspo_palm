import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CustomInputText from '../../components/CustomInputText';

const list = [
  {
    name: 'ที่มาของต้นพัน',
    id : 'originsoil',
    value: 'ซื้อจากแปลงเพาะกล้า',
    selectedvalue: '3',
    selectlist:[{id:'1', value:'ซื้อเมล็ดงอกมาเพาะเอง'},{id:'2', value:'ซื้อกล้าระยะ Pre nursery มาบำรุงรักษาแล้วปลูก'},{id:'3',value:'ซื้อจากแปลงเพาะกล้า'},{id:'4', value:'ซื้อจากแปลงเพาะกล้าของบริษัท'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: "ระบุ",
    id:'originsoilother',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'ชนิดของต้นพันธ์',
    id: 'kindsoil',
    value: 'ลูกผสม D x P',
    selectedvalue:'1',
    selectlist:[{id:'1',value:'ลูกผสม D x P'},{id:'2', value:'ไม่แน่ใจ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: 'ระบุชื่อบริษัทที่ผลิต',
    id: 'kindsoilcompany',
    value: 'ไอฟิล',
    readonly: false,
    type: 'text'
  },{
    name: 'การคัดกล้า',
    id: 'choosesoil',
    value: '',
    selectedvalue: '1',
    selectlist:[{id:'1',value:'มีการคัดต้นกล้าก่อนปลูก'},{id:'2',value:'ไม่มีการคัดต้นกล้าก่อนปลูก'}],
    readonly:false,
    type: 'selectbox'
  },{
    name: 'อายุต้นกล้า',
    id: 'oldsoil',
    value: '0',
    readonly: false,
    type: 'text'
  }
]
// "form3": {
//   "originsoil" : "3",
//   "originsoilother" : "",
//   "kindsoil":"1",
//   "kindsoilcompany": "ไอฟิล",
//   "choosesoil" : "1",
//   "oldsoil" : "0",
//   "pic_other" : ["URL1", "URL2"],
//   "Pic" : ["URL1", "URL2"]
// },
export default class FormInput3 extends Component {
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
      <ScrollView ScrollContentStyle={styles.constainer}>
      <View>
        <CustomInputText list={list} getprops={this.props}  ></CustomInputText>
      </View>
      </ScrollView>
 
  )
  }
}

const styles = StyleSheet.create({})
