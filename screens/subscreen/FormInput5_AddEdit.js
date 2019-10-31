import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Colors,Fonts } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import CustomInputText from '../../components/CustomInputText';

const list = [
  {
    name: 'รหัสแปลง',
    id : 'code',
    value: '001',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },
  {
    name: 'วันที่',
    id : 'datein',
    value: '02/10/2561',
    selectedvalue:'02/10/2561',
    readonly: false,
    type: 'datetime'
  },
  
]

export default class FormInput5_AddEdit extends Component {
    render() {
        return (
          <KeyboardAwareScrollView>
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
        <View>
          <Text style={styles.textinputTitle}>ชนิดปุ๋ย/วัสดุบำรุงดิน/อื่นๆ</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' autoFocus={true}/> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ยี่ห้อปุ๋ย</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' /> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>อัตราที่ใช้(กิโลกรัม/ตัน)</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' /> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ราคา/กิโลกรัม(บาท)</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' /> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าปุ๋ย</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' /> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าจ้างใส่ปุ๋ย</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' /> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>หมายเหตุ</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' /> 
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
          </KeyboardAwareScrollView>
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
  