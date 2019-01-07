import React, { PureComponent } from 'react'
import { Platform, Text, View, Button, AsyncStorage, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Icon } from 'expo';
import { Colors, Fonts } from '../constants';

 class LogoutButton extends PureComponent {
    constructor(props){
        super(props)
    }

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
            this.props.navigation.navigate('SelectSiteScreen');
          }
        )
      }
       
      }

  render() {
    return (
      <TouchableOpacity onPress={() => this.signout(this.props.page) } style={styles.item} >
        <Icon.Ionicons name={Platform === 'ios' ? 'ios-key' : 'md-key'} size={15} style={{color:Colors.white,  marginRight:5, textAlignVertical:'center'}} >
                    <Text style={styles.itemText}> Logout</Text>
                    </Icon.Ionicons>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 35,
    borderColor: Colors.primaryLight,
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.greencolor,
    marginRight:5,
    padding:5,
  },
  itemText: {
    color: Colors.white,
    fontFamily: Fonts.primary,
    textAlign:'center',
    textAlignVertical:'center',
    marginLeft:10
  },
})

export default withNavigation(LogoutButton);