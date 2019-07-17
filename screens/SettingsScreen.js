import React from 'react';
//import { ExpoConfigView } from '@expo/samples';
import { LogoutButton } from '../components/LogoutButton';
import { Platform, Text,ScrollView, View, Button, AsyncStorage, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'expo';
import { Colors, Fonts } from '../constants';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  signout(page){
    if(page === 'signout'){
      AsyncStorage.clear().then(
        ()=>{
          this.props.navigation.navigate('AuthLoading')
        }
      );
    }else{
      AsyncStorage.removeItem('siteID').then(
        () => {
          this.props.navigation.navigate('LoginScreen');
        }
      )
    }
     
    }

    _logoutrender(page){
      return(
        <TouchableOpacity onPress={() => this.signout(page) } style={styles.logoutbutton} >
          <View style={styles.itemText}>
          <Icon.Ionicons name={Platform === 'ios' ? 'ios-key' : 'md-key'} size={15} style={{color:Colors.white,  marginRight:5, textAlignVertical:'center'}} >
            <Text> Logout</Text>
          </Icon.Ionicons>
          </View>
        </TouchableOpacity>
      );
    }


  render() {
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <View>
            {this._logoutrender("signout")}
        </View>
      </ScrollView>
    )
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
  //  return <ExpoConfigView />;
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'flex-start',
    fontSize: 16
},
  logoutbutton:{
    width:300,
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  
  itemText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
})
