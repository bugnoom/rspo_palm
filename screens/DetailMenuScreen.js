import React from 'react';
import { Platform, ScrollView, StyleSheet, View, TouchableOpacity, Image, Text, FlatList, AsyncStorage } from 'react-native';
import { Colors, Fonts } from '../constants';
import * as Icon from '@expo/vector-icons'
import { getSiteInfo } from '../services/DataService';

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

  constructor(props){
    super(props);
    this.state = {
      sitedetail:'',
      siteid:''
    }
    this.reRenderSomething = this.props.navigation.addListener('willFocus', () => {
      //Put your code here you want to rerender, in my case i want to rerender the data 
      //im fetching from firebase and display the changes
      console.log("open detail menu screen");
      this.getdetail();
    });
    
  }

  getdetail(){ // get deata from siteID
    AsyncStorage.getItem('siteID',(err, result) => {
      let siteid = JSON.parse(result);
      console.log('storage data is : ', siteid);
      this.setState({siteid: siteid})
      getSiteInfo(siteid).then((data) =>{
        
        this.setState({sitedetail: data.data})
       //console.log('info data', data.data);
      });
    });

   

  }

  componentWillMount(){
   this.reRenderSomething;
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
         <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>ชื่อแปลง: {this.state.sitedetail.name}</Text>
      <View style={styles.imageContainer}>
       
          <View style={styles.titleIconContainer}>
              <Image 
               source= {{uri : "https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png"}}
               style={{ width: 150, height: 150 }}
               resizeMode="cover"
               />
            </View>
      
            <View style={styles.titleTextContainer}>
            <Image
               source= {{uri : "https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png"}}
                style={{ width: 150, height: 150 }}
               resizeMode="cover"
               />
            </View>
          </View>

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
                  style={{ marginBottom: -3 , color:Colors.greencolor}}
                  color={this.props.focused ? Colors.greencolor : Colors.tabIconDefault}
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
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
    justifyContent:'center'
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
    color: Colors.blackcolor,
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

