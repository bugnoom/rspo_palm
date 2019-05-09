import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'
import CustomInputText from '../../components/CustomInputText';

const list = [
  {
    name: 'รหัสแปลง',
    id : 'code',
    value: '001',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },{
    name: 'วันที่',
    id : 'datein',
    value: '02/10/2561',
    selectedvalue:'02/10/2561',
    readonly: false,
    type: 'datetime'
  },{
    name: 'ประเภท',
    id : 'type',
    value: '',
    selectlist:[{id:'1', value:'ค่าปุ๋ย'},{id:'2', value:'ค่าจ้างใส่ปุ๋ย'},{id:'3', value:'ค่ากำจัดวัชพืช'},{id:'4', value:'ค่าตัดแต่งทางใบ'},{id:'5', value:'ค่าจ้างเก็บเกี่ยว'},{id:'6', value:'ค่าใช้จ่ายในการต้นไม้ที่ไม่ให้ผลผลิต'},{id:'7', value:'ค่าวิเคราะห์ดินและใบ'},{id:'8', value:'ค่าน้ำมัน'},{id:'9', value:'ค่ายาฆ่าแมลง'},{id:'10', value:'ค่าวัสดุอุปกรณ์'},{id:'11', value:'ค่าขนส่ง'}],
    selectedvalue:'1',
    readonly: false,
    type: 'selectbox' //picker
  },{
    name: 'ค่าจ้าง',
    id : 'code',
    value: '',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  }
]

export default class FormInput15_AddEdit extends Component {
    render() {
        return (
          <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
            <View>
              <CustomInputText list={list} getprops={this.props}  ></CustomInputText>
            </View>
          </ScrollView>
        )
      }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', height:'100%' },
  })