import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'
import CustomInputText from '../../components/CustomInputText';

const list = [
  {
    name: 'รหัสแปลง',
    id : 'code',
    value: '001',
    selectedvalue:'',
    readonly: false,
    type: 'text'
  },
  {
    name: 'วันที่',
    id : 'datein',
    value: '02/10/2561',
    selectedvalue:'02/10/2561',
    readonly: false,
    type: 'datetime'
  },
  
]

export default class FormInput5_AddEdit extends Component {
    render() {
        return (
          <ScrollView ScrollContentStyle={styles.container} style={styles.container}>
            <View>
              <CustomInputText list={list} getprops={this.props}  ></CustomInputText>
            </View>
          </ScrollView>
        )
      }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', height:'100%' },
  })
  