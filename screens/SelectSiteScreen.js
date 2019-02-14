import React, { Component } from 'react'
import { Text, StyleSheet, Platform, View, ScrollView, Button, BackHandler, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'
import { testData } from './../services/DataService';
import { Colors, Fonts } from '../constants';
import { Icon } from 'expo'
import LogoutButton from '../components/LogoutButton';


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
                <TouchableOpacity onPress={() => this.SelectSite(item)} style={styles.item}>
                    <Icon.Ionicons name={Platform === 'ios' ? 'ios-map' : 'md-map'} size={28} style={{color:Colors.white, height:48, marginRight:10, textAlignVertical:'center'}} >
                    <Text style={styles.itemText}> {item.name}</Text>
                    </Icon.Ionicons>
                    
                </TouchableOpacity>
            )
            }
            />
        
        </ScrollView>
    //   <View style={styles.container}>
    //       <ScrollView style={styles.container} ScrollContentStyle={styles.contentcontainer}>
    //     <Text> textInComponent </Text>
    //     <Button title="MySite1" onPress={this.Signin} />
    //     <Button title="Logout" onPress={this.logout} />
    //     </ScrollView>
    //   </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 10,
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
