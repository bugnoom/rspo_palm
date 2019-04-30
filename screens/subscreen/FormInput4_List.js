import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Picker  } from 'react-native'
import { Table, TableWrapper, Row, Cell, Rows, Col } from 'react-native-table-component';
import { Colors}  from '../../constants'
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';


export default class FormInput4_List extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: navigation.getParam('sitename', ''),
      headerRight: <TouchableOpacity  onPress={() => params.handleUpdate()}><Text style={styles.buttonAdd}>AddNew</Text></TouchableOpacity>
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
      tableHead: ['#','วันที่', 'น้ำหนักทะลาย', 'ราคา', 'น้ำหนักผลร่วง', 'ราคา', 'รวมรายได้', 'ค่าตัด', 'รายได้สุทธิ'],
      widthArr: [40, 100, 80, 80, 80, 80, 80, 80, 80]
    }
  }

  _alertIndex(index) {
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

  element = (index) => (
    
    
      <View  style={{width:this.state.widthArr[0]}}>
      <Icon
  name='edit'
  color='#00aced'
  onPress={() => this._alertIndex(index)} />
      </View>
    
    
  );

  render() {

    const state = this.state;
    const tableData = [];
    const colData = [
                      [this.element(0),'24/04/2562','500','2.50','200','3.0','10000','2000','8000'],
                      [this.element(1),'25/04/2562','500','2.50','200','3.0','10000','2000','8000'],
                      [this.element(2),'26/04/2562','500','2.50','200','3.0','10000','2000','8000'],
                      [this.element(3),'27/04/2562','500','2.50','200','3.0','10000','2000','8000'],
                    ];
   
    tableData.push(colData);
    
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
          <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={{justifyContent:"flex-end"}}>
            <Icon name='search'/>
            <Text>Search</Text>
          </TouchableOpacity>
          </View>
        </View>
       
        <View style={styles.tablecontainner}>
          <ScrollView ScrollContentStyle={styles.tablecontainner} horizontal={true} >
            <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                            { 
                              tableData.map((rowData, index) => (
                            <Rows
                              key={index}
                              data={rowData}
                              widthArr={state.widthArr}
                              style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                              textStyle={styles.text}
                              /> 
                      ))
                    }
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
  btnText: { textAlign: 'center', color: '#fff' }

  
})
