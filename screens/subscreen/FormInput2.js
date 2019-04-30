import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CustomInputText from '../../components/CustomInputText';


const list = [
  {
    name: 'ชื่อแปลง',
    id : 'name',
    value: 'สวนปาล์ม หลังบ้าน',
    selectedvalue:'',
    readonly: true,
    type: 'text'
  },{
    name : 'ชุดดิน',
    id: 'statesoil',
    value: '',
    selectedvalue: '',
    readonly: false,
    type: 'text'
  },{
    name: 'สภาพพื้นที่',
    id: 'typearea',
    value: 'อื่น ๆ',
    selectedvalue: '5',
    selectlist:[{id:'1', value:'ที่ราบ'},{id:'2', value:'ที่ราบ ลอนคลื่น'},{id:'3',value:'ที่ลุ่ม'},{id:'4', value:'ที่ลาดชัน'},{id:'5', value:'อื่น ๆ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: 'ระบุสภาพพื้นที่',
    id: 'typearearemark',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'ลักษณะเนื้อดิน',
    id: 'typesoil',
    value: 'อื่น ๆ',
    selectedvalue:'6',
    selectlist:[{id:'1',value:'เหนียว'},{id:'2',value:'ร่วน'},{id:'3',value:'ทราย'},{id:'4',value:'ลูกรัก'},{id:'5',value:'ร่วนปนทราย'},{id:'6',value:'อื่น ๆ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: 'ระบุลักษณะเนื้อดิน',
    id: 'typesoilother',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'การเตรียมพื้นที่ปลูก',
    id: 'plantingarea',
    value: 'อื่น ๆ',
    selectedvalue:'5',
    selectlist:[{id:'1',value:'ไถพรวม'},{id:'2',value:'ไถยกร่อง'},{id:'3',value:'ขุดคูยกร่อง'},{id:'4',value:'ทำขั้นบันได'},{id:'5',value:'อื่น ๆ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: 'ระบุการเตรียมพื้นที่ปลูก',
    id: 'plantingareaother',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'การอนุรักษ์ดิน',
    id: 'soilconservation',
    value: 'อื่น ๆ',
    selectedvalue: '5',
    selectlist:[{id:'1',value: 'ขั้นบันได'},{id:'2',value:'กองทางใบ'},{id:'3',value:'พืชตระกูลถั่วคลุมดิน'},{id:'4',value:'ใช้ทะลายปาล์มเปล่าคลุม'},{id:'5',value:'อื่น ๆ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: "ระบุการอนุรักษ์ดิน",
    id: 'soilconservationother',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'วิธีการให้น้ำ',
    id: 'wateringmethod',
    value: 'ปล่อยธรรมชาติ',
    selectedvalue: '1',
    selectlist:[{id:'1', value:'ปล่อยธรรมชาติ'},{id:'2', value: 'รดน้ำ'}],
    readonly: false,
    type: 'selectbox'
  },{
    name: 'แหล่งน้ำที่ใช้',
    id: 'sourcewater',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name:'การใช้พื้นที่ก่อนปลูกปาล์มน้ำมัน',
    id: 'usebefore',
    placeholder: '',
    value: '',
    readonly: false,
    type: 'textarea'
  },{
    name: 'รูปแบบการปลูก',
    id: 'pattern',
    selectedvalue: '1',
    selectlist:[{id:'1',value:'ปลูกสามเหลี่ยมด้านเท่า'},{id:'2',value:'ปลูกแบบสี่เหลี่ยม'}],
    value: 'ปลูกสามเหลี่ยมด้านเท่า',
    readonly: false,
    type: "selectbox"
  },{
    name: 'ระยะปลูก',
    id: 'phase',
    value: '',
    readonly: false,
    type: 'text'
  },{
    name: 'การเก็บเกี่ยว',
    id: 'harvesting',
    value: 'จ้างผู้รับเหมา',
    selectedvalue:'2',
    selectlist:[{id:'1',value:'เก็บเอง'},{id:'2',value:'จ้างผู้รับเหมา'},{id:'3',value:'อื่น ๆ'}],
    readonly: false,
    type:'selectbox'
  },{
    name: 'ระบุ',
    id: 'harvestingother',
    value: '',
    readonly: false,
    type: 'text'
  }
]

// "form2": {
//   "statesoil" : "",
//   "typearea"  : "5",
//   "typearearemark" : "",
//   "typesoil"  : "6",
//   "typesoilother" : "",
//   "plantingarea" : "5",
//   "plantingareaother" : "",
//   "soilconservation" : "5",
//   "soilconservationother" : "",
//   "wateringmethod" : "1",
//   "sourcewater" : "",
//   "usebefore" : "",
//   "pattern" : "1",
//   "phase" : "",
//   "harvesting" : "2",
//   "harvestingother" : "นาย ก."
// },


export default class FormInput2 extends Component {
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
