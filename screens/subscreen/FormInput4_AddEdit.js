import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity,TextInput } from 'react-native'
import DatePicker from 'react-native-datepicker';
import CustomInputText from '../../components/CustomInputText';
import { Colors, Fonts } from '../../constants';

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
export default class FormInput4_AddEdit extends Component {
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
        <View>
          <Text style={styles.textinputTitle}>เลขที่บิล</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' autoFocus={true}/> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ทะลายน้ำหนัก(กก.)</Text>
          <TextInput style={styles.textinput} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ทะลายราคา(บาท/กก.)</Text>
          <TextInput style={styles.textinput} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ผลร่วงน้ำหนัก(กก.)</Text>
          <TextInput style={styles.textinput} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ผลร่วงราคา(บาท/กก.)</Text>
          <TextInput style={styles.textinput} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าตัดทะลาย(บาท)</Text>
          <TextInput style={styles.textinput} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าเก็บลูกร่วง(บาท)</Text>
          <TextInput style={styles.textinput} />
        </View>

        <View style={{marginTop:20}}>
        <TouchableOpacity onPress={()=>alert('Save Success')} style={styles.item}>
          <Text style={styles.itemText}>SAVE</Text>
        </TouchableOpacity>
        </View>
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
