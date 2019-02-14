import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage} from 'react-native';
import LogoutButton from './../components/LogoutButton';

const textTitle = "ABC";
const id = '';

export default class HomeScreen extends React.Component {
 
  static navigationOptions = ({ navigation }) =>{
    return {
      title : navigation.getParam('sitename', 'Dashboard'),
    }
   
  };

  constructor(props){
    super(props);

   this.siteID();
  }

  siteID(){
   AsyncStorage.getItem('siteID').then(
     (res) => {
       const data = JSON.parse(res);
     //  this.props.navigation.setParams({sitename: data[0].name});
     // console.log("site ID is",data[0].name);
     }
   );
  
  }

  

  backtoselectsite = async() => {
    AsyncStorage.removeItem('siteID').then(
      () => {
        this.props.navigation.navigate('LoginScreen');
      }
    )
  }

  render() {
   

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <LogoutButton page="signout" />
          <Button title="Select Site" onPress={this.backtoselectsite} />
          <Text>{ JSON.stringify(this.siteID)}</Text>

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
