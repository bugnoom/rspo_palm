import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button, TextInput, Label } from 'react-native'
import { Colors, Fonts } from '../../constants';
import CustomInputText from '../../components/CustomInputText';

const list = [
  {
    name: 'รหัสแปลง',
    id : 'code',
    value: '001',
    selectedvalue:'',
    readonly: true,
    type: 'text'
  },{
    name: 'รหัส RSPO',
    id : 'rspocode',
    value: '001',
    selectedvalue:'',
    readonly: true,
    type: 'text'
  },{
    name: 'ชื่อแปลงปลูก',
    id : 'name',
    value: 'สวนปาล์ม หลังบ้าน',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'วันที่เข้าร่วมโครงการ',
    id : 'datein',
    value: '02/10/2561',
    selectedvalue:'02/10/2561',
    readonly: false,
    type: 'datetime'
  },{
    name: 'ชื่อแปลงปลูก',
    id : 'name',
    value: 'สวนปาล์ม หลังบ้าน',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'ประเภท',
    id : 'type',
    value: 'สวนปาล์ม หลังบ้าน',
    selectlist:[{id:'1', value:'โฉนด'},{id:'2', value:'นส3. ก'}],
    selectedvalue:'1',
    readonly: false,
    type: 'selectbox' //picker
  },{
    name: 'ที่อยู่',
    id : 'address',
    value: 'กระบี่',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'ปีที่ปลูก',
    id : 'yearin',
    value: '2535',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'พื้นที่ปลูก(ไร่)',
    id : 'area',
    value: '30',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'จำนวนต้น',
    id : 'num',
    value: '340',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  }
]


/*
"code": "1",
"rspocode": "001",
"name": "สวนปาล์ม หลังบ้าน",
"datein": "02/10/2561",
"type": "1",
"address": "กระบี่",
"yearin": "2535",
"area": "30",
"num": "340",
"dead": "0",
"growback": "0",
"yeargrow": "2540",
"solutiongrow": "1",
"reasondead": "",
"detailarea": [{
    "description": "",
    "images": ["URL1", "URL2"]
}],
"benefitother":[{
    "description": "",
    "images":["URL1", "URL2"]
}],
"conserve":""
*/

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
        <ScrollView ScrollContentStyle={styles.constainer}>
        <View>
          <CustomInputText list={list}  ></CustomInputText>
        </View>
        </ScrollView>
   
    )
  }
}


  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
})
