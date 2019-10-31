import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, AsyncStorage } from 'react-native'
import CustomInputText from '../../components/CustomInputText';
import { getSiteInfo, selectboxData } from '../../services/DataService';



// "form3": {
//   "originsoil" : "3",
//   "originsoilother" : "",
//   "kindsoil":"1",
//   "kindsoilcompany": "ไอฟิล",
//   "choosesoil" : "1",
//   "oldsoil" : "0",
//   "pic_other" : ["URL1", "URL2"],
//   "Pic" : ["URL1", "URL2"]
// },
export default class FormInput3 extends Component {
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
        this.state ={
          sitedetail: '',
          datadetail: '',
        }
        this.reRenderSomething = this.props.navigation.addListener('willFocus', () => {
          //Put your code here you want to rerender, in my case i want to rerender the data 
          //im fetching from firebase and display the changes
          console.log("open form2 screen")
          this.getdetail();
        });
      }
      
    componentWillMount(){
      this.reRenderSomething
    }

    getdetail(){
      AsyncStorage.getItem('siteID',(err, result) =>{
        let datasiteid = JSON.parse(result);
        console.log("storage data is: ", datasiteid);
        getSiteInfo(datasiteid).then((data)=>{
          this.setState({sitedetail: data.data})
        })
      })
    }

    getdata(){
      const datalist = [
        {
          name: 'ที่มาของต้นพัน',
          id : 'originsoil',
          value: selectboxData.originsoil[this.state.sitedetail.originsoil],
          selectedvalue: this.state.sitedetail.originsoil,
          selectlist:[{id:'1', value:'ซื้อเมล็ดงอกมาเพาะเอง'},{id:'2', value:'ซื้อกล้าระยะ Pre nursery มาบำรุงรักษาแล้วปลูก'},{id:'3',value:'ซื้อจากแปลงเพาะกล้า'},{id:'4', value:'ซื้อจากแปลงเพาะกล้าของบริษัท'}],
          readonly: false,
          type: 'selectbox'
        },{
          name: "ระบุ",
          id:'originsoilother',
          value: this.state.sitedetail.originsoilother,
          readonly: false,
          type: 'text'
        },{
          name: 'ชนิดของต้นพันธ์',
          id: 'kindsoil',
          value: selectboxData.kindsoil[this.state.sitedetail.kindsoil],
          selectedvalue:this.state.sitedetail.kindsoil,
          selectlist:[{id:'1',value:'ลูกผสม D x P'},{id:'2', value:'ไม่แน่ใจ'}],
          readonly: false,
          type: 'selectbox'
        },{
          name: 'ระบุชื่อบริษัทที่ผลิต',
          id: 'kindsoilcompany',
          value: this.state.sitedetail.kindsoilcompany,
          readonly: false,
          type: 'text'
        },{
          name: 'การคัดกล้า',
          id: 'choosesoil',
          value: selectboxData.choosesoil[this.state.sitedetail.choosesoil],
          selectedvalue: this.state.sitedetail.choosesoil,
          selectlist:[{id:'1',value:'มีการคัดต้นกล้าก่อนปลูก'},{id:'2',value:'ไม่มีการคัดต้นกล้าก่อนปลูก'}],
          readonly:false,
          type: 'selectbox'
        },{
          name: 'อายุต้นกล้า',
          id: 'oldsoil',
          value: this.state.sitedetail.oldsoil,
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
        <CustomInputText list={this.getdata()} getprops={this.props} isdata={this.state.sitedetail} fromstate="3"  ></CustomInputText>
      </View>
      </ScrollView>
 
  )
  }
}

const styles = StyleSheet.create({})
