import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Picker, AsyncStorage, ActivityIndicator, Alert } from 'react-native'
import { Table, TableWrapper, Row, Cell, Rows, Col } from 'react-native-table-component';
import { Colors}  from '../../constants'
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import { getProductInfoList, APIURL, header } from '../../services/DataService'


const rowdata = [];

export default class FormInput4_List extends React.Component {


  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
      title: navigation.getParam('sitename', ''),
      headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonAdd}>AddNew</Text></TouchableOpacity>
    }
  }

  constructor(props){
    super(props);
    const { navigation } = this.props
    const pagename = JSON.parse(navigation.getParam('data', ''));
    const startdate = new Date();
    const enddate = new Date();

    this.props.navigation.setParams({sitename: pagename[0]});
    this.state = {
      startselectvalue: startdate.getDate()  + "/" + (startdate.getMonth()) + "/" + startdate.getFullYear(),
      endselectvalue:  enddate.getDate() + "/" + (enddate.getMonth()+1) + "/" + enddate.getFullYear(),
      tableHead: ['#','วันที่', 'น้ำหนักทะลาย', 'ราคา', 'น้ำหนักผลร่วง', 'ราคา', 'รวมรายได้', 'ค่าตัด', 'รายได้สุทธิ'],
      widthArr: [40, 100, 80, 80, 80, 80, 80, 80, 80],
      sitedetail:[],
      isLoading: false
    }
    this.reRenderSomething = this.props.navigation.addListener('willFocus', () => {
      //Put your code here you want to rerender, in my case i want to rerender the data 
      //im fetching from firebase and display the changes
      console.log("open form4 screen")
      this.loadDatalist();
    });
   

  }
  loadDatalist(){
    this.setState({isLoading:true})
    
    AsyncStorage.getItem('siteID',(err, result) => {
      let datasiteid = JSON.parse(result);
      console.log('storage data is : ', datasiteid);
      getProductInfoList(datasiteid,this.state.startselectvalue, this.state.endselectvalue).then((data) =>{
        let rowdata = [];
       // this.setState({sitedetail: data.data})
        this.setState({isLoading:false})
        if(data.status.status != 0 ){
          rowdata =
          //[this.element(0),'24/04/2562','500','2.50','200','3.0','10000','2000','8000'],
          data.data.map((v,i)=>{
            const s = v.totalprice - v.earnings;
            const r = this.element(v.id);
            return [r, v.datein,v.numerative,v.numerativeprice,v.seedfail,v.seedfailprice,v.totalprice,v.earnings,s]
          })
        }else{
          rowdata = [];
        }
       
       
       //console.log('row is ', rowdata);
       this.setState({sitedetail: rowdata})
      });
    });
  }

  makedata = (data) => {
    const datein = data.datein
  }

  componentWillMount(){
    this.reRenderSomething;
  }

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.openform})
    this.props.navigation.setParams({_alertIndex : this._alertIndex})
  }

  openform = () => {
    this.props.navigation.navigate('FormInput4_AddEdit')
  }

  _alertIndex = (index) => {
    Alert.alert("ลบข้อมูล","ยืนยันการลบข้อมูล หรือ ไม่?",[
      {text:"Cancel", onPress:()=>console.log("Cancel Delete"),style:'cancel'},
      {text:"OK",onPress:()=>this.deletedata(index)}
    ]);
  }

  deletedata = (id) => {
    fetch(APIURL + '/yield/delete.php', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        id: id
      })

      }).then((response) => response.json())
          .then((responseJson) => {
            Alert.alert("Delete " + id +" Success")
            this.loadDatalist();
          }).catch((error) => {
            this.setState({isLoading: false})
            console.error(error);
          });
    
  }

  _renderDatePicker(type){
    return(  
      <DatePicker
              style={{ marginTop:10, marginBottom: 10, }}
              date={(type=='start') ? this.state.startselectvalue: this.state.endselectvalue}
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
              onDateChange={(date) => {(type == 'start')?this.setState({startselectvalue: date}) : this.setState({endselectvalue:date})}}
          />
         
    )
  }

  element = (id) => {
      return (
      <View  style={{width:this.state.widthArr[0]}}>
      <Icon name='close' color='#FF0000' onPress={() => this._alertIndex(id)} />
      </View>
      )
  }

   _renderRowData(){
        return(
          <Rows
            data={this.state.sitedetail}
            widthArr={this.state.widthArr}
            style={styles.row}
            textStyle={styles.text}
          /> 
        )
  }

 searchdata(){
   console.log("sel date", this.state.startselectvalue + "  " + this.state.endselectvalue)
 }

  render() {
    return (
      <ScrollView ScrollContentStyle={styles.container} style={styles.container} >
        <View style={{borderColor:'#cccccc', borderBottomWidth:1,flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{ padding: 10}}>
            <Text>วันที่ : </Text>
            {this._renderDatePicker('start')}
          </View>
          <View style={{ padding:10}}> 
            <Text>ถึงวันที่ : </Text>
            {this._renderDatePicker('end')} 
          </View>
          <View style={{alignItems:'flex-end', marginTop:40}}>
          <TouchableOpacity style={{justifyContent:"flex-end"}} onPress={() => this.loadDatalist()}> 
            <Icon name='search'/>
            <Text>ค้นหา</Text>
          </TouchableOpacity>
          </View>
        </View>
       
        <View style={styles.tablecontainner}>
          <ScrollView ScrollContentStyle={styles.tablecontainner} horizontal={true} >
            <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            {
            this.state.isLoading ?  <View style={styles.activityContainer}><ActivityIndicator size="large" color="#00ff00" animating={true}/></View> : null
          }
                <ScrollView style={styles.dataWrapper}>
            
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                      { this._renderRowData()  }
                  </Table>
                </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', height:'100%' },
  tablecontainner:{padding:0, paddingTop:30},
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  buttonAdd:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.greencolor
  },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
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
  
})
