import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, AsyncStorage } from 'react-native'
import CustomInputText from '../../components/CustomInputText';
import { getSiteInfo, selectboxData } from '../../services/DataService';




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
        this.state = {
          sitedetail: '',
          datadetail:'',
        }
        this.reRenderSomething = this.props.navigation.addListener('willFocus', () => {
          //Put your code here you want to rerender, in my case i want to rerender the data 
          //im fetching from firebase and display the changes
          console.log("open form2 screen")
          this.getdetail();
        });

      }

      componentWillMount(){
        this.reRenderSomething;
      }

      getdetail(){ // get info data
        AsyncStorage.getItem('siteID',(err, result) => {
          let datasiteid = JSON.parse(result);
          console.log('storage data is : ', datasiteid);
          getSiteInfo(datasiteid).then((data) =>{
            this.setState({sitedetail: data.data})
           //console.log('info data', data.data);
          });
        });
      }

      getdata(){
        const datalist = [
          {
            name: 'ชื่อแปลง',
            id : 'name',
            value: this.state.sitedetail.name,
            selectedvalue:'',
            readonly: true,
            type: 'text'
          },{
            name : 'ชุดดิน',
            id: 'statesoil',
            value: this.state.sitedetail.statesoil,
            selectedvalue: '',
            readonly: false,
            type: 'text'
          },{
            name: 'สภาพพื้นที่',
            id: 'typearea',
            value: selectboxData.typearea[this.state.sitedetail.typearea],
            selectedvalue: this.state.sitedetail.typearea,
            selectlist:[{id:'1', value:'ที่ราบ'},{id:'2', value:'ที่ราบ ลอนคลื่น'},{id:'3',value:'ที่ลุ่ม'},{id:'4', value:'ที่ลาดชัน'},{id:'5', value:'อื่น ๆ'}],
            readonly: false,
            type: 'selectbox'
          },{
            name: 'ระบุสภาพพื้นที่',
            id: 'typearearemark',
            value: this.state.sitedetail.typearearemark,
            readonly: false,
            type: 'text'
          },{
            name: 'ลักษณะเนื้อดิน',
            id: 'typesoil',
            value: selectboxData.typesoil[this.state.sitedetail.typesoil],
            selectedvalue:this.state.sitedetail.typesoil,
            selectlist:[{id:'1',value:'เหนียว'},{id:'2',value:'ร่วน'},{id:'3',value:'ทราย'},{id:'4',value:'ลูกรัง'},{id:'5',value:'ร่วนปนทราย'},{id:'6',value:'อื่น ๆ'}],
            readonly: false,
            type: 'selectbox'
          },{
            name: 'ระบุลักษณะเนื้อดิน',
            id: 'typesoilother',
            value: this.state.sitedetail.typesoilother,
            readonly: false,
            type: 'text'
          },{
            name: 'การเตรียมพื้นที่ปลูก',
            id: 'plantingarea',
            value: selectboxData.plantingarea[this.state.sitedetail.plantingarea],
            selectedvalue:this.state.sitedetail.plantingarea,
            selectlist:[{id:'1',value:'ไถพรวม'},{id:'2',value:'ไถยกร่อง'},{id:'3',value:'ขุดคูยกร่อง'},{id:'4',value:'ทำขั้นบันได'},{id:'5',value:'อื่น ๆ'}],
            readonly: false,
            type: 'selectbox'
          },{
            name: 'ระบุการเตรียมพื้นที่ปลูก',
            id: 'plantingareaother',
            value: this.state.sitedetail.plantingareaother,
            readonly: false,
            type: 'text'
          },{
            name: 'การอนุรักษ์ดิน',
            id: 'soilconservation',
            value: selectboxData.soilconservation[this.state.sitedetail.soilconservation],
            selectedvalue: this.state.sitedetail.soilconservation,
            selectlist:[{id:'1',value: 'ขั้นบันได'},{id:'2',value:'กองทางใบ'},{id:'3',value:'พืชตระกูลถั่วคลุมดิน'},{id:'4',value:'ใช้ทะลายปาล์มเปล่าคลุม'},{id:'5',value:'อื่น ๆ'}],
            readonly: false,
            type: 'selectbox'
          },{
            name: "ระบุการอนุรักษ์ดิน",
            id: 'soilconservationother',
            value: this.state.sitedetail.soilconservationother,
            readonly: false,
            type: 'text'
          },{
            name: 'วิธีการให้น้ำ',
            id: 'wateringmethod',
            value: selectboxData.wateringmethod[this.state.sitedetail.wateringmethod],
            selectedvalue: this.state.sitedetail.wateringmethod,
            selectlist:[{id:'1', value:'ปล่อยธรรมชาติ'},{id:'2', value: 'รดน้ำ'}],
            readonly: false,
            type: 'selectbox'
          },{
            name: 'แหล่งน้ำที่ใช้',
            id: 'sourcewater',
            value: this.state.sitedetail.sourcewater,
            readonly: false,
            type: 'text'
          },{
            name:'การใช้พื้นที่ก่อนปลูกปาล์มน้ำมัน',
            id: 'usebefore',
            placeholder: '',
            value: this.state.sitedetail.usebefore,
            readonly: false,
            type: 'textarea'
          },{
            name: 'รูปแบบการปลูก',
            id: 'pattern',
            selectedvalue: this.state.sitedetail.pattern,
            selectlist:[{id:'1',value:'ปลูกสามเหลี่ยมด้านเท่า'},{id:'2',value:'ปลูกแบบสี่เหลี่ยม'}],
            value: selectboxData.pattern[this.state.sitedetail.pattern],
            readonly: false,
            type: "selectbox"
          },{
            name: 'ระยะปลูก',
            id: 'phase',
            value: this.state.sitedetail.phase,
            readonly: false,
            type: 'text'
          },{
            name: 'การเก็บเกี่ยว',
            id: 'harvesting',
            value: selectboxData.harvesting[this.state.sitedetail.harvesting],
            selectedvalue:this.state.sitedetail.harvesting,
            selectlist:[{id:'1',value:'เก็บเอง'},{id:'2',value:'จ้างผู้รับเหมา'},{id:'3',value:'อื่น ๆ'}],
            readonly: false,
            type:'selectbox'
          },{
            name: 'ระบุ',
            id: 'harvestingother',
            value: this.state.sitedetail.harvestingother,
            readonly: false,
            type: 'text'
          }
        ]
        return datalist
      }

      render() {
        return (
            <ScrollView ScrollContentStyle={styles.constainer}>
            <View>
              <CustomInputText list={this.getdata()} getprops={this.props} isdata={this.state.sitedetail} fromstate="2"  ></CustomInputText>
            </View>
            </ScrollView>
       
        )
      }
}

const styles = StyleSheet.create({})
