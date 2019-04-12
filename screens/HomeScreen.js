import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage, FlatList} from 'react-native';
import PureChart from 'react-native-pure-chart';
import { testData } from '../services/DataService';

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
    let sampleData = [
      {
        seriesName: 'รายรับ',
        data: [
          {x: 'ม.ค.', y: 2000},
          {x: 'ก.พ.', y: 1000},
          {x: 'มี.ค.', y: 1400},
          {x: 'เม.ย.', y: 1500},
          {x: 'พ.ค.', y: 400},
          {x: 'มิ.ย.', y: 450},
          {x: 'มิ.ย.', y: 450},
          {x: 'ก.ค.', y: 400},
          {x: 'ส.ค.', y: 900},
          {x: 'ก.ย.', y: 900},
          {x: 'ต.ค.', y: 900},
          {x: 'พ.ย.', y: 900},
          {x: 'ธ.ค.', y: 900},
        ],
        color: 'green'
      },
      {
        seriesName: 'รายจ่าย',
        data: [
          {x: 'ม.ค.', y: 2100},
          {x: 'ก.พ.', y: 1500},
          {x: 'มี.ค.', y: 1000},
          {x: 'เม.ย.', y: 1150},
          {x: 'พ.ค.', y: 450},
          {x: 'มิ.ย.', y: 400},
          {x: 'มิ.ย.', y: 400},
          {x: 'ก.ค.', y: 450},
          {x: 'ส.ค.', y: 450},
          {x: 'ก.ย.', y: 450},
          {x: 'ต.ค.', y: 450},
          {x: 'พ.ย.', y: 450},
          {x: 'ธ.ค.', y: 450},
        ],
        color: 'red'
      }
    ];

    return (

      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{flex:1, flexDirection:"row", justifyContent:'space-around', marginBottom:20, padding:10}}>
            <View>
              <Text style={styles.titleSummery}>รายรับ</Text>
              <Text style={{color:'#dd4b39', marginTop:5, textAlign:"center"}} >25,000</Text>
            </View>
            <View>
              <Text style={styles.titleSummery}>รายจ่าย</Text>
              <Text  style={{ color:'#3d9400', marginTop:5, textAlign:"center"}} >25,000</Text>
            </View>
            <View>
              <Text style={styles.titleSummery}>สุทธิ</Text>
              <Text style={{ color:'#FF0000', marginTop:5, textAlign:"center"}}>0</Text>
            </View>
          </View>
          <View style={{borderBottomColor:'#cccccc', borderBottomWidth:1, paddingBottom:10}}>
            <PureChart 
              xAxisGridLineColor={'#cccccc'} 
              gap={45} width={'100%'} 
              height={300} 
              data={sampleData} 
              showEvenNumberXaxisLabel={false}
              customValueRenderer={(index, point) => {
                return (
                  <Text style={{textAlign: 'center', fontSize:10}}>{point.y}</Text>
                )
              }} 
              type='line' />
          </View>
          <View>
          <FlatList 
           // horizontal = {false}
           // numColumns = {3}
            data={testData.data.site}
            keyExtractor={(item, index) => item.id}
            renderItem={
            ({item}) => (
            
            <TouchableOpacity  onPress={() => this.SelectSite(item)} style={styles.borderButton}>
            <View style={styles.titleContainer}>
            
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
          </View>
          {/* <LogoutButton page="signout" />
          <Button title="Select Site" onPress={this.backtoselectsite} />
          <Text>{ JSON.stringify(this.siteID)}</Text> */}

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    borderBottomColor:'#aaaaaa',
    borderBottomWidth:1
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  titleSummery:{
    textAlign:'center', 
    fontWeight:'bold'
  },
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
