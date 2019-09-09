import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput,  Platform } from 'react-native'
import DatePicker from 'react-native-datepicker'
import CustomInputText from '../../components/CustomInputText';
import { Colors, Fonts } from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

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

const istypelist = [{id:'1', value:'ค่าปุ๋ย'},{id:'2', value:'ค่าจ้างใส่ปุ๋ย'},{id:'3', value:'ค่ากำจัดวัชพืช'},{id:'4', value:'ค่าตัดแต่งทางใบ'},{id:'5', value:'ค่าจ้างเก็บเกี่ยว'},{id:'6', value:'ค่าใช้จ่ายในการต้นไม้ที่ไม่ให้ผลผลิต'},{id:'7', value:'ค่าวิเคราะห์ดินและใบ'},{id:'8', value:'ค่าน้ำมัน'},{id:'9', value:'ค่ายาฆ่าแมลง'},{id:'10', value:'ค่าวัสดุอุปกรณ์'},{id:'11', value:'ค่าขนส่ง'}]

export default class FormInput15_AddEdit extends Component {

  constructor(props){
    super(props);
    this.state = { istype : "", startselectvalue: new Date(), }
  }

    render() {
      

        return (
          <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
            <View>
                <Text style={styles.textinputTitle}>วันที่</Text>
                <DatePicker
                  style={{width: '90%', marginTop:10, marginBottom: 10}}
                  date="20/06/2019"
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
            </View>
            <View style={{marginBottom:20,borderBottomWidth:1, borderBottomColor:'#cccccc' }}></View>
            <View style={{paddingLeft:10, paddingRight:10}}>
              <Text style={{fontWeight:"bold"}}>ประเภท</Text>
              <RNPickerSelect onValueChange={(value) => this.setState({istype:value})}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              Icon={() => {
                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
              }}
              items={[
                {value:'1', label:'ค่าปุ๋ย'},
                {value:'2', label:'ค่าจ้างใส่ปุ๋ย'},
                {value:'3', label:'ค่ากำจัดวัชพืช'},
                {value:'4', label:'ค่าตัดแต่งทางใบ'},
                {value:'5', label:'ค่าจ้างเก็บเกี่ยว'},
                {value:'6', label:'ค่าใช้จ่ายในการต้นไม้ที่ไม่ให้ผลผลิต'},
                {value:'7', label:'ค่าวิเคราะห์ดินและใบ'},
                {value:'8', label:'ค่าน้ำมัน'},
                {value:'9', label:'ค่ายาฆ่าแมลง'},
                {value:'10', label:'ค่าวัสดุอุปกรณ์'},
                {value:'11', label:'ค่าขนส่ง'}
              ]}
              value={this.state.istype}
               />
             
            </View>
            <View style={{marginTop:20}}/>
            <View>
              <Text style={styles.textinputTitle}>ค่าจ้าง</Text>
              <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' /> 
            </View>
            <View style={{marginTop:20}}>
            <TouchableOpacity onPress={()=>alert('Save Success')} style={styles.item}>
              <Text style={styles.itemText}>SAVE</Text>
            </TouchableOpacity>
            </View>
            {/* <View>
              <CustomInputText list={list} getprops={this.props}  ></CustomInputText>
            </View> */}
          </ScrollView>
        )
      }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', height:'100%' },
    textinput:{
      width:'100%', height:50, borderBottomWidth:1, borderBottomColor:'#cccccc',paddingLeft:20,marginBottom:5, color:Colors.primary
    },
    textinputTitle:{
      paddingTop:2,
      paddingLeft:10,
      fontSize:15,
      fontWeight: "bold"
    },
    item: {
      flex: 1,
      height: 35,
      borderColor: Colors.primaryLight,
      borderWidth: 0,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: Colors.greencolor,
      marginRight:5,
      padding:5,
    },
    itemText: {
      color: Colors.white,
      fontFamily: Fonts.primary,
      textAlign:'center',
      textAlignVertical:'center',
      marginLeft:10
    },
  })

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: Colors.primary,
      paddingRight: 30, // to ensure the text is never behind the icon
      height:45
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: Colors.primary,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });