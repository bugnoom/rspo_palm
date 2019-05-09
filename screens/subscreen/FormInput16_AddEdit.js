import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'
import CustomInputText from '../../components/CustomInputText';
import {Colors} from '../../constants'


export default class FormInput16_AddEdit extends Component {

constructor(props){
    super(props);
    this.state={
        datavalue:{
            list : [
                {
                  name: 'รหัสแปลง',
                  id : 'code',
                  value: '001',
                  selectedvalue:'',
                  readonly: true,
                  type: 'text'
                },{
                  name: 'วันที่',
                  id : 'datein',
                  value: '02/10/2561',
                  selectedvalue:'02/10/2561',
                  readonly: false,
                  type: 'datetime'
                },{
                  name: 'เวลา',
                  id : 'time',
                  value: '', 
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
                },{
                  name: 'สถานที่เกิดเหตุ',
                  id : 'code',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text'
                },{
                  name: 'กรณีอุบัติเหตุ',
                  id : 'type',
                  value: 'มีการบาดเจ็บ/สูญเสีย',
                  selectlist:[{id:'1', value:'มีการบาดเจ็บ/สูญเสีย'},{id:'2', value:'ทรัพย์สินเสียหาย'}],
                  selectedvalue:'1',
                  readonly: false,
                  type: 'selectbox' //picker
               },{
                  name: 'ชื่อ-นามสกุล',
                  id : 'type',
                  value: '',
                  selectedvalue:'1',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'กรณีอุบัติเหตุ',
                  id : 'type',
                  value: 'เจ้าของกิจการ',
                  selectlist:[{id:'1', value:'เจ้าของกิจการ'},{id:'2', value:'ลูกจ้าง'}],
                  selectedvalue:'1',
                  readonly: false,
                  type: 'selectbox' //picker
               },{
                  name: 'อายุ',
                  id : 'type',
                  value: '',
                  selectedvalue:'1',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'การศึกษา',
                  id : 'education',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'อายุงาน (ปี)',
                  id : 'jobyear',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'อายุงาน (เดือน)',
                  id : 'jobmonth',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'หน่วยงาน',
                  id : 'dept',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'หน้าที่รับผิดชอบ',
                  id : 'jobdesc',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },{
                  name: 'ชื่อพบเห็นเหตุการณ์',
                  id : 'eventperson',
                  value: '',
                  selectedvalue:'',
                  readonly: false,
                  type: 'text' 
               },
              ]
        },
        formname: "FormInput16_AddEdit"
    }
}

static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
        headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonSave}>Save</Text></TouchableOpacity>
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.update})
  }

  update = () => {
    var formname = this.state.form;
    console.log("Update click now!!", this.state.selectvalue)
    alert('update success ' + this.state.datavalue.list);
   
   // this.props.navigation.navigate(formname, {valuedata:this.state})
  }

  setDataValue(item){
      console.log('call back item is:' + item);
  }


    render() {
        console.log('thsi is formname: '+ this.state.formname)
        return (
          <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
            <View>
              <CustomInputText callback={this.setDataValue.bind(this)} formname={this.state.formname} list={this.state.datavalue.list} getprops={this.props} />
            </View>
          </ScrollView>
        )
      }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', height:'100%' },
    buttonSave:{
        marginHorizontal:16,
        fontSize: 17,
        color:Colors.greencolor
      },
  })