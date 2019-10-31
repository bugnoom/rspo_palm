import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput,  AsyncStorage, Alert, ActivityIndicator } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Colors, Fonts } from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { convertdate, APIURL, header } from '../../services/DataService';


export default class FormInput15_AddEdit extends Component {

  constructor(props){
    super(props);
    this.state = { 
      Input_type : "", 
      Input_datein : "",
      Input_price : 0,
      isLoading : false
     }

     AsyncStorage.getItem('siteID',(err, result) => {
      this.setState({palm : JSON.parse(result)})
    })
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
      headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonSave}>Save</Text></TouchableOpacity>
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this._InsertData})
  }

  _InsertData = () => {
    this.setState({isLoading: true})
    if(this.state.Input_datein != "" || this.state.Input_type != ""){
      fetch(APIURL + '/expense/create.php', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          palm: this.state.palm, 
          type: this.state.Input_type, 
          datein:convertdate(this.state.Input_datein),
          price: this.state.Input_price
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
              this.setState({isLoading: false})
              Alert.alert(responseJson.status.message);
              
              // Showing response message coming from server after inserting records.
              console.log("respos:", responseJson)
              if(responseJson.status.status == 1){
                this.props.navigation.goBack()
              }
              
             // Alert.alert(responseJson);
            }).catch((error) => {
              this.setState({isLoading: false})
              console.error(error);
            });

    }else{
      Alert.alert("กรุณาระบุวันที่ และ ประเภทค่าใช้จ่าย");
      this.setState({isLoading: false})
    }
  }


    render() {
      

        return (
          <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
            <View>
                <Text style={styles.textinputTitle}>วันที่</Text>
                <DatePicker
                  style={{width: '90%', marginTop:10, marginBottom: 10}}
                  date={this.state.Input_datein}
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
                  onDateChange={(date) => {this.setState({Input_datein: date})}}
              />
            </View>
            <View style={{marginBottom:20,borderBottomWidth:1, borderBottomColor:'#cccccc' }}></View>
            <View style={{paddingLeft:10, paddingRight:10}}>
              <Text style={{fontWeight:"bold"}}>ประเภท</Text>
              <RNPickerSelect onValueChange={(value) => this.setState({Input_type:value})}
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
                {value:'2', label:'ค่าปุ๋ย'},
                {value:'3', label:'ค่าจ้างใส่ปุ๋ย'},
                {value:'4', label:'ค่ากำจัดวัชพืช'},
                {value:'5', label:'ค่าตัดแต่งทางใบ'},
                {value:'6', label:'ค่าจ้างเก็บเกี่ยว'},
                {value:'11', label:'ค่าใช้จ่ายในการต้นไม้ที่ไม่ให้ผลผลิต'},
                {value:'10', label:'ค่าวิเคราะห์ดินและใบ'},
                {value:'9', label:'ค่าน้ำมัน'},
                {value:'8', label:'ค่ายาฆ่าแมลง'},
                {value:'7', label:'ค่าวัสดุอุปกรณ์'},
                {value:'12', label:'ค่าขนส่ง'}
              ]}
              value={this.state.istype}
               />
             
            </View>
            <View style={{marginTop:20}}/>
            <View>
              <Text style={styles.textinputTitle}>ค่าจ้าง</Text>
              <TextInput style={styles.textinput} editable={true} clearButtonMode='always' keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_price : TextInputValue}) } /> 
            </View>
            {/* <View style={{marginTop:20}}>
            <TouchableOpacity onPress={()=>alert('Save Success')} style={styles.item}>
              <Text style={styles.itemText}>SAVE</Text>
            </TouchableOpacity>
            </View> */}
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
    buttonSave:{
      marginHorizontal:16,
      fontSize: 17,
      color:Colors.greencolor
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