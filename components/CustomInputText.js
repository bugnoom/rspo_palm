import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Picker,
  Modal,
  TouchableHighlight
} from "react-native";
import { ListItem } from "react-native-elements";
import { Colors } from "../constants";



export default class CustomInputText extends Component {

  constructor(props) {
    super(props);

    
  }
  state = {
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => this.openmodal(item)} style={styles.item}>
    
      <ListItem
        style={styles.ls}
        title={<Text style={styles.title}>{item.name}</Text>}
        subtitle={<Text style={styles.subtitle}>{item.value}</Text>}
        rightIcon={!item.readonly ? { name: "edit" } : {}}
        hideChevron={true}
      />
      
    </TouchableOpacity>
  );

  render() {
    return (
      <Modaldata s={this.state.modalVisible}/>,
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

const alertja = ({txt}) =>{
  return(
    alert(txt)
  );
}

const picker = ({ selectlist, selected }) => {
  return (
    <Picker selectedValue={selected} onValueChange={this.updateUser}>
      <Picker.Item label="Steve" value="steve" />
      <Picker.Item label="Ellen" value="ellen" />
      <Picker.Item label="Maria" value="maria" />
    </Picker>
  );
};

const Modaldata = (s) => {
  console.log('s is :', s);
  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={s.s}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
      <View style={{marginTop: 22, backgroundColor:'red'}}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!s.s);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
    </Modal>
  
  )
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
