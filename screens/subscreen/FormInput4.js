import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CustomInputText from '../../components/CustomInputText';


const list=[
  {
    name: 'วันที่',
    id : 'datein',
    value: '14/01/2562',
    selectedvalue:'14/01/2562',
    readonly: false,
    type: 'datetime'
  }
]
// {
//   "datein":"14/01/2562",
//   "billnumber" : "",
//   "numerative" : "0.00",
//   "numerativeprice" : "0.00",
//   "seedfail" : "0.00",
//   "seedfailprice" : "0.00",
//   "totalprice" : "0.00",
//   "earnings" : "0.00",
//   "earningsseedfail" : "0.00",
//   "images" : ["URL1", "URL2"]
// },

export default class FormInput4 extends Component {
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
      }

  render() {
    return (
       <ScrollView ScrollContentStyle={styles.constainer}>
            <View>
              <CustomInputText list={list} getprops={this.props}  ></CustomInputText>
            </View>
            </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
