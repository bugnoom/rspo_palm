import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, Picker  } from 'react-native'
import { ListItem } from 'react-native-elements';
import { Colors } from '../constants';

export default class CustomInputText extends Component {
 
    constructor(props){
        super(props);
    }

   

      keyExtractor = (item, index) => index.toString()
      
      renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.openmodal(item)} style={styles.item}>
        <ListItem  style={styles.ls}
          title={
              <Text style={styles.title}>{item.name}</Text>
          }
          subtitle={
              <Text style={styles.subtitle}>{item.value}</Text>
            }
            
          rightIcon={(!item.readonly)? {name:'edit'} : {}}
          hideChevron={true}
        />
        </TouchableOpacity>
      )
      
      render () {
        return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            renderItem={this.renderItem}
          />
        )
      }

      //create modal for show Edit input
        openmodal(item) {
            if(!item.readonly){
                alert(item.value);
                // type text
                // type datetime

                // type selectbox
                <picker></picker>

                // type input box

            }else{
                return;
            }
            
        }
       
}
 

const picker = ({selectlist, selected}) =>{
    return(
        <Picker selectedValue = {selected} onValueChange = {this.updateUser}>
            <Picker.Item label = "Steve" value = "steve" />
            <Picker.Item label = "Ellen" value = "ellen" />
            <Picker.Item label = "Maria" value = "maria" />
        </Picker>
    )
}


  const styles = StyleSheet.create({
      ls:{
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop:1

      },
      title:{
        color:Colors.tabIconDefault
      },
      subtitle:{
          paddingLeft: '3%',
          color:Colors.primary,
          fontSize: 18,
          paddingTop:2
      }
   });
