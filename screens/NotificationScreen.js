import  React  from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class NotificationScreen extends React.Component{
    static navigationOptions = {
        title: 'Notification',
      };
      
    render(){
        return(
            <ScrollView style={styles.container}>
            
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });