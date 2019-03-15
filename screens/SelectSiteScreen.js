import React, { Component } from 'react';
import { Text, StyleSheet, Platform, Image, View, Button, ScrollView, BackHandler, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'

import { Card } from 'react-native-elements';

import { testData } from './../services/DataService';
import { Colors, Fonts } from '../constants';


export default class SelectSiteScreen extends Component {
    constructor(props){
        super(props);

        this.SelectSite = this.SelectSite.bind(this);
       
    }

    // static navigationOptions = {
    //     title :'Select Site',
    //     gesturesEnabled: false,
    //     headerLeft : null,
    //     headerRight :  <LogoutButton page="signout" />
    //   };

   
    SelectSite = async(items) => {
        const data = [];
        data.push(items);
    
        await AsyncStorage.setItem('siteID', JSON.stringify(data)).then(
            () => {
                this.props.navigation.navigate('DetailScreen')
            }
        )
    }

  render() {
    return (
    
        <ScrollView style={styles.container}>
          
            <FlatList 
           // horizontal = {false}
           // numColumns = {3}
            data={testData.data.site}
            keyExtractor={(item, index) => item.id}
            renderItem={
            ({item}) => (
            
            <TouchableOpacity  onPress={() => this.SelectSite(item)} style={styles.borderButton}>
            <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
              <AppIconPreview  />
            </View>
      
            <View style={styles.titleTextContainer}>
              <Text style={styles.nameText} numberOfLines={1}>
              {item.name}
              </Text>
      
              <Text style={styles.slugText} numberOfLines={1}>
              {item.address}
              </Text>
      
              <Text style={styles.descriptionText}>
              เนื้อที่  : {item.area} ตารางเมตร
              </Text>
            </View>
          </View>
          </TouchableOpacity>
            )
            }
            />
        
        </ScrollView>
    )
  }
}

const AppIconPreview = ({ iconUrl }) => {
    if (!iconUrl) {
      iconUrl =
        'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
    }
    return (
        <Image
          source={{ uri: iconUrl }}
          style={{ width: 64, height: 64 }}
          resizeMode="cover"
        />
      );
    };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 10,
    },
    imageContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    titleContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
      },
      titleIconContainer: {
        marginRight: 15,
        paddingTop: 2,
      },
      nameText: {
        fontWeight: '600',
        fontSize: 18,
      },
      slugText: {
        color: '#a39f9f',
        fontSize: 14,
        backgroundColor: 'transparent',
      },
      descriptionText: {
        fontSize: 14,
        marginTop: 6,
        color: '#4d4d4d',
      },
      borderButton:{
        borderBottomWidth:1,
        borderBottomColor: Colors.noticeText,
      },

    item: {
        flex: 1,
        height: 60,
        borderColor: Colors.primaryLight,
        borderWidth: 0,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.primary,
        margin:10,
        padding:10,
      },
      itemText: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 16,
        textAlign:'center',
        textAlignVertical:'center',
        marginLeft:10
      },
})
