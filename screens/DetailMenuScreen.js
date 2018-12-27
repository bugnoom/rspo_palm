import React from 'react';
import { Platform, ScrollView, StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Colors, Fonts } from '../constants';
import { Icon } from 'expo';

const jsonmenulist = require('../assets/menu.json');

export default class DetailMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'จัดการข้อมูล',
  }; 

  openform = (name,data) =>{
    const menudata = [];
    menudata.push(data);
    this.props.navigation.navigate(name,{ data:JSON.stringify(menudata)})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      
      <FlatList 
        horizontal = {false}
        numColumns = {3}
        data={jsonmenulist.menulist}
        keyExtractor={(item, index) => item.menuid}
        renderItem={
          ({item}) => (
            <TouchableOpacity onPress={() => this.openform(item.menulink, item.menuname)} style={styles.item}>
                <Icon.Ionicons
                  name={Platform === 'ios' ? 'ios-'+item.menuicon : 'md-' + item.menuicon}
                  size={38}
                  style={{ marginBottom: -3 , color:Colors.blackcolor}}
                  color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
                  
                  <Text style={styles.itemText}>{item.menuname}</Text>
                </TouchableOpacity>
          )
        }
        />


      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: Colors.primaryLight,
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: Colors.primary,
    fontFamily: Fonts.primary,
    fontSize: 12,
    textAlign:'center',
    textAlignVertical:'top',
    height:35
  },
  itemImage: {
    height: 35,
  },
});

