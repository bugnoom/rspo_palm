import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Colors } from "../constants";



export default class CustomInputText extends Component {

  constructor(props) {
    super(props);
  }
 
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {   
      return( 
        <TouchableOpacity onPress={() => this.openmodal(item)} style={styles.item}>        
          <ListItem
            style={styles.ls}
            title={<Text style={styles.title}>{item.name}</Text>}
            subtitle={<Text style={styles.subtitle}>{(item.value == "")? '-': item.value}</Text>}
            rightIcon={!item.readonly ? { name: "edit" } : {}}
            hideChevron={true}
          />
          
        </TouchableOpacity>
      );
  }

  render() {
    return (
     
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        renderItem={this.renderItem}
      />
    );
  }

  //create modal for show Edit input
  openmodal(item) {
    if (!item.readonly) {
      this.props.getprops.navigation.navigate('EditDataForm',{data:item, field:item.name})
    } else {
      return;
    }
  }
}

const styles = StyleSheet.create({
  ls: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 1
  },
  title: {
    color: Colors.tabIconDefault
  },
  subtitle: {
    paddingLeft: "3%",
    color: Colors.primary,
    fontSize: 18,
    paddingTop: 2
  }
});
