import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity,TextInput, AsyncStorage, Alert, ActivityIndicator } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { Colors, Fonts } from '../../constants';
import { Constants, ImagePicker, Permissions } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { APIURL,header, convertdate } from '../../services/DataService.js'
export default class FormInput4_AddEdit extends Component {



  constructor(props){
    console.log("API URL ", APIURL)
    super(props);
    this.state={
      palm : "",
      Input_datein : "",
      Input_billnumber : "",
      Input_numerative : 0.00,
      Input_numerativeprice : 0.00,
      Input_seedfail : 0.00,
      Input_seedfailprice : 0.00,
      Input_earnings : 0.00,
      Input_earningsseedfail : 0.00,
      isLoading:false,
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

  _InsertData = () =>{
    this.setState({isLoading: true})
    if(this.state.Input_datein != ""){
      fetch(APIURL + '/yield/create.php', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          palm: this.state.palm, 
          datein:convertdate(this.state.Input_datein), 
          billnumber:this.state.Input_billnumber, 
          numerative:this.state.Input_numerative, 
          numerativeprice:this.state.Input_numerativeprice, 
          seedfail:this.state.Input_seedfail, 
          seedfailprice:this.state.Input_seedfailprice, 
          earnings:this.state.Input_earnings,
          earningsseedfail:this.state.Input_earningsseedfail,
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
      Alert.alert("กรุณาระบุวันที่");
      this.setState({isLoading: false})
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
         
      <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
      {
            this.state.isLoading ?  <View style={styles.activityContainer}><ActivityIndicator size="large" color="#00ff00" animating={true}/></View> : null
          }
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
        <View>
          <Text style={styles.textinputTitle}>เลขที่บิล</Text>
          <TextInput style={styles.textinput} editable={true} clearButtonMode='always' autoFocus={true} onChangeText={TextInputValue => this.setState({Input_billnumber: TextInputValue})}/> 
        </View>
        <View>
          <Text style={styles.textinputTitle}>ทะลายน้ำหนัก(กก.)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_numerative: TextInputValue})} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ทะลายราคา(บาท/กก.)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_numerativeprice: TextInputValue})} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ผลร่วงน้ำหนัก(กก.)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_seedfail: TextInputValue})} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ผลร่วงราคา(บาท/กก.)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_seedfailprice: TextInputValue})} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าตัดทะลาย(บาท)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_earnings: TextInputValue})} />
        </View>
        <View>
          <Text style={styles.textinputTitle}>ค่าเก็บลูกร่วง(บาท)</Text>
          <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={TextInputValue => this.setState({Input_earningsseedfail: TextInputValue})} />
        </View>

        {/* <View style={{marginTop:20}}>
        <TouchableOpacity onPress={this._InsertData} style={styles.item}>
          <Text style={styles.itemText}>SAVE</Text>
        </TouchableOpacity>
        </View> */}
      </ScrollView>
      </KeyboardAwareScrollView>
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
