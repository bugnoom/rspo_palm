import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,ListView, ListItem,AsyncStorage, TextInput} from 'react-native'
import { Colors, Fonts } from '../../constants';
import CustomInputText from '../../components/CustomInputText';
import { getSiteInfo } from '../../services/DataService';


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

export default class FormInput1 extends React.Component {

  static navigationOptions = ({navigation}) => {
    return{
      title: navigation.getParam('sitename', ''),
    }
  }

  constructor(props){
    super(props);
    const { navigation } = this.props
    const pagename = JSON.parse(navigation.getParam('data', ''));
    console.log('data pagename', pagename)
    this.props.navigation.setParams({sitename: pagename[0]});
    this.state = {
      sitedetail: '',
      datadetail:'',
      field:{
        id: "",
        name:"",
        code : "",
        rspocode: "",
        address:"",
        type:"",
        yearin: "",
        area: "",
        num: "",
        dead: "",
        growback: "",
        yeargrow: "",
        solutiongrow: "",
        reasondead: "",
        detailarea: "",
        benefitother: "",
        conserve: ""
      }
    }
    this.getdetail();
  }

  // componentWillMount(){
  //   this.getdata();
  // }
  getdetail(){
    AsyncStorage.getItem('siteID',(err, result) => {
      let data = JSON.parse(result);
      console.log('storage data is : ', data);
      this.setState({sitedetail: data[0]})
    });
  }

  getdata(){
   
    const datalist = [
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
        value: this.state.sitedetail.name,
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
        name: 'ประเภท',
        id : 'type',
        value: this.state.sitedetail.type,
        selectlist:[{id:'1', value:'โฉนด'},{id:'2', value:'นส3. ก'}],
        selectedvalue:this.state.sitedetail.type,
        readonly: false,
        type: 'selectbox' //picker
      },{
        name: 'ที่อยู่',
        id : 'address',
        value: this.state.sitedetail.address,
        selectedvalue:'',
        readonly: false,
        type: 'text'
      },{
        name: 'ปีที่ปลูก',
        id : 'yearin',
        value: this.state.sitedetail.yearin,
        selectedvalue:'',
        readonly: false,
        type: 'text'
      },{
        name: 'พื้นที่ปลูก(ไร่)',
        id : 'area',
        value: this.state.sitedetail.area,
        selectedvalue:'',
        readonly: false,
        type: 'text'
      },{
        name: 'จำนวนต้น',
        id : 'num',
        value: this.state.sitedetail.num,
        selectedvalue:'',
        readonly: false,
        type: 'text'
      },{
        name: 'จำนวนต้นตาย',
        id: 'dead',
        value: this.state.sitedetail.dead,
        selectedvalue: '',
        readonly: false,
        type: 'text'
      },{
        name: 'จำนวนต้นปลูกทดแทน',
        id: 'growback',
        value: this.state.sitedetail.growback,
        selectedvalue: '',
        readonly: false,
        type: 'text'
      },{
        name: "ปีที่ปลูกทดแทน (พ.ศ.)",
        id: 'yeargrow',
        value: this.state.sitedetail.yeargrow,
        selectedvalue: '',
        readonly: false,
        type: 'text'
      },{
        name: 'วิธีปลูกต้นแทน',
        id: 'solutiongrow',
        value: this.state.sitedetail.solutiongrow,
        selectedvalue: this.state.sitedetail.solutiongrow,
        selectlist: [{}],
        readonly: false,
        type: "text"
      },{
        name: 'สาเหตุการตาย',
        id: 'reasondead',
        value: this.state.sitedetail.reasondead,
        selectedvalue: '',
        readonly: false,
        type: 'text'
      },{
        name:'พื้นที่ปลูกพืชอื่นๆในแปลงเช่น ยางพารา ผลไม้ เป็นต้น',
        placeholder: 'มีรายละเอียดดังต่อไปนี้ (ระบุจำนวนไร่ของการใช้ประโยชน์)',
        hasPic:[],
        id : 'detailarea',
        value: this.state.sitedetail.detailarea,
        selectedvalue: '',
        readonly: false,
        type: 'textarea'
      },{
        name: 'พื่นที่ที่ใช้ประโยชน์อื่นๆ เช่น สระน้ำ บ้านพักอาศัย เป็นต้น จำนวน',
        placeholder: '',
        id: 'benefitother',
        value: this.state.sitedetail.benefitother,
        selectedvalue: '',
        readonly: false,
        type: 'textarea'
      },{
        name: 'พื้นที่ที่มีคุณค่าเชิงอนุรักษ์ในสวนปาล์มเช่น แม่น้ำสำคัญขนาดใหญ่ อ่างเก็บน้ำ เป็นต้น',
        placeholder: '',
        id: 'conserve',
        value: this.state.sitedetail.conserve,
        selectedvalue: '',
        readonly: false,
        type: 'textarea'
      }
    ]
   
    return datalist;
  }

  
  render() {
  //  console.log(store.getState());
    return (
        <ScrollView ScrollContentStyle={styles.constainer} style={styles.container}>
        <View>
           <CustomInputText list={this.getdata()} getprops={this.props}  ></CustomInputText> 
           {/* <TextInput value = {this.state.sitedetail.name}
        style={{width:'100%', height:60, borderBottomWidth:1, borderBottomColor:'#cccccc', padding:10}}
        editable={false}
        clearButtonMode='always'
        onChangeText={(value) => this.setState({sitedetail:{name:value}})}
        autoFocus={true}
        /> */}
        
        
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
  ls: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 1
  },
  title: {
    color: Colors.tabIconDefault
  },
  subtitle: {
    paddingLeft: "3%",
    color: Colors.primary,
    fontSize: 18,
    paddingTop: 2
  }
})
