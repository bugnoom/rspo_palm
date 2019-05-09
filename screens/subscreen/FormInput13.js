import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Picker  } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Colors}  from '../../constants'
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions'


export default class FormInput13 extends Component {
  
  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return{
      title: navigation.getParam('sitename', ''),
     // headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonAdd}>AddNew</Text></TouchableOpacity>
    }
  }

  constructor(props){
    super(props);
    const { navigation } = this.props
    const pagename = JSON.parse(navigation.getParam('data', ''));
    this.props.navigation.setParams({sitename: pagename[0]});
    this.state = {
      startselectvalue: new Date(),
      endselectvalue: new Date(),
      tableTitle: ['ค่าปุ๋ย', 'ค่าจ้างใส่ปุ๋ย', 'ค่าจำกัดวัชพืช', 'ค่าตัดแต่งทางใบ','ค่าจ้างเก็บเกี่ยว','ค่าใช้จ่ายในการตัดต้นไม้ที่ไม่ให้ผลผลิต','ค่าวิเคราะห์ดินแล้วใบ','ค่าน้ำมัน','ค่ายาฆ่าแมลง','ค่าวัสดุอุปกรณ์','ค่าขนส่ง'],
      tableData: [
        [ '100', '101', '102', '103','104','105','106','107','108','109','110'],
      ],
      tableHeightArr:[40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({ handleUpdate : this.openform})
    this.props.navigation.setParams({_alertIndex : this._alertIndex})
  }

  // openform = () => {
  //   this.props.navigation.navigate('FormInput13_AddEdit')
  // }

  _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
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

  element = (id) => (
      <View  style={{width:this.state.widthArr[0]}}>
      <Icon name='close' color='#FF0000' onPress={() => state._alertIndex(id)} />
      </View>
  );

  sumArrayData(arrData){
    let data = 0;
    data = arrData.reduce((p,n) => parseInt(p) + parseInt(n),0);
    return data
  }

  render() {

    const state = this.state;
    
    return (
      <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
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
          <TouchableOpacity style={{justifyContent:"flex-end"}}>
            <Icon name='search'/>
            <Text>ค้นหา</Text>
          </TouchableOpacity>
          </View>
        </View>
       
        <View style={styles.tablecontainner}>
          <ScrollView ScrollContentStyle={styles.tablecontainner} horizontal={true} >
            <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row'}}>
              <TableWrapper style={{width:Dimensions.get('window').width, backgroundColor:'#ccc'}}>
                <Col data={['รายรับ']} textStyle={{textAlign:'center'}} style={{height:40}}/>
              </TableWrapper>
            </Table>

            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row'}}>
              <TableWrapper style={{width:Dimensions.get('window').width-80}}>
                <Cell data={['รายได้รวม']} style={{height:40, padding:10}} textStyle={{textAlign:'right'}}/>
              </TableWrapper>
              <TableWrapper style={{width:80}}>
                <Cell data={['10000']} style={{height:40, padding:10}}/>
              </TableWrapper>
            </Table>

            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row'}}>
              <TableWrapper style={{width:Dimensions.get('window').width, backgroundColor:'#ccc'}}>
                <Col data={['ค่าใช้จ่าย']} textStyle={{textAlign:'center'}} style={{height:40}}/>
              </TableWrapper>
            </Table>
            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row'}}>
              <TableWrapper style={{width: Dimensions.get('window').width-80}}>
                <TableWrapper style={{flexDirection: 'row'}}>
                  <Col data={['วัตถุดิบ', 'ค่าแรง', 'ค่าใช้จ่ายในการผลิต']} heightArr={[40, 160, 240]} textStyle={styles.text} />
                  <Col data={state.tableTitle} style={styles.title} heightArr={state.tableHeightArr} textStyle={styles.titleText} />
                </TableWrapper>
              </TableWrapper>
              <TableWrapper style={{flex:1, width:80}}>
                <Cols data={state.tableData} heightArr={state.tableHeightArr} textStyle={styles.text}/>
              </TableWrapper>
            </Table>

            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row'}}>
              <TableWrapper style={{width:Dimensions.get('window').width-80}}>
                <Cell data={['รวมต้นทุนการผลิต']} style={{height:40, padding:10}} textStyle={{textAlign:'right'}}/>
              </TableWrapper>
              <TableWrapper style={{width:80}}>
                <Cell data={[this.sumArrayData(state.tableData)]} style={{height:40, padding:10}}/>
              </TableWrapper>
            </Table>

            <Table borderStyle={{borderColor: '#C1C0B9'}} style={{flexDirection:'row',backgroundColor:'#ccc'}}>
              <TableWrapper style={{width:Dimensions.get('window').width-80}}>
                <Cell data={['กำไรจากการผลิต']} style={{height:40, padding:10}} textStyle={{textAlign:'right', fontSize:16, fontWeight:'bold'}}/>
              </TableWrapper>
              <TableWrapper style={{width:80}}>
                <Cell data={['10000']} style={{height:40, padding:10}}/>
              </TableWrapper>
            </Table>
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
  singleHead: { width:'auto', height: 40, backgroundColor: '#c8e1ff' },
  header: { height: 50, backgroundColor: '#537791' },
  head: { flex: 1, backgroundColor: '#c8e1ff', height:40, },
  title: { flex: 2, backgroundColor: '#f6f8fa'},
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  buttonAdd:{
    marginHorizontal:16,
    fontSize: 17,
    color:Colors.greencolor
  },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }

  
})
