import React, { Component } from 'react';
import SearchBar from "react-native-dynamic-search-bar";
import { ThemeColors } from 'react-navigation';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Input, ThemeProvider } from 'react-native-elements'


const category = [
  {
    id: 1,
    name: "Length",
    prefix: "km, ft, in...",
    unit : 
    {
      kilometer : "km",
      meter : "m",
      centimeter : "cm",
      milimeter : "mm",
	    mile : "mi",
      yard : "yd",
      foot : "ft",
      inch : "in"
    }
  },

  {
    id: 2,
    name: "Temperature",
    prefix: "K, F, C...",
    unit : 
    {
      celcius : "C",
      fahrenheit : "F",
      kelvin : "K",
    }
  },

  {
    id: 3,
    name: "Weight",
    prefix: "g, lb, oz..."
  },

  {
    id: 4,
    name: "Volume",
    prefix: "m3, ml3, L...",
    unit : 
    {
      cubicMeter : "m3",
      liter : "L",
      milliliter : "ml",
	    cubicFeet : "mi",
      cubicInch : "yd",
    }
  },

  {
    id: 5,
    name: "Area",
    prefix: "m2, ft2, in2...",
    unit : 
    {
      squareKilometer : "km",
      sqaureMeter : "m",
      squareMile : "mi",
      squareYard : "yd",
      sqaureFeet : "ft",
      squareInch : "in",
      acre : "acre",
      hectare : "hectare"
    }
  },
]

const styles = StyleSheet.create({

  //safe area
  container: {
   flex: 1,
   marginTop: 30,
   marginBottom: 30,
   marginHorizontal: 16,
   backgroundColor: 'white',
  },

  //header
  headerAlign: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },

  //header background
  shapeBackground: {
    position: 'absolute',
    top: -30,
    left: -3500,
    width: 7000,
    height: 190,
    backgroundColor: '#E0E0E0'
  }

})

class HomeScreen extends Component {
    //import font and check
    state = {
      fontLoaded: false,
    };
    async componentDidMount() {
      await Font.loadAsync({
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }

    //To hide the ActionBar/NavigationBar
    constructor(props) {
      super(props);
      this.state = {
        selected: undefined
      };
    }

    static navigationOptions = {
      header: null,
    };

    onValueChange(value) {
      this.setState({
        selected: undefined
      });
    }

    render(){
      let initial = {
        id: 1,
        name: "Length",
        unit : {
          kilometer : "km",
          meter : "m",
          centimeter : "cm",
          milimeter : "mm",
          mile : "mi",
          yard : "yd",
          foot : "ft",
          inch : "in"
        }
      }
      const { navigate } = this.props.navigation
      const ListCate = category.map((cat) =>
      <View>
       {
         this.state.fontLoaded ? (
         <TouchableOpacity
         type="clear"
         style={{
           flexDirection: 'row',
           //dropshadow
           borderWidth: 1,
           borderRadius: 4,
           borderColor: 'white',
           borderBottomWidth: 0,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 10 },
           shadowOpacity: 0.15,
           shadowRadius: 15,
           elevation: 1,
           // marginLeft: 5,
           // marginRight: 5,
           // marginTop: 10,
           
           //in button text alignment
           backgroundColor: 'white',
           padding: 10,
           marginTop: 25
         }}
         onPress={() => navigate('Calculation', {name: cat.name, unit: cat.unit})}>
         <Text style={{
           flex:3,
           color: 'black',
           fontSize: 20,
           fontFamily: 'Poppins-Bold',
           }}>{cat.name}
         </Text>
         <Text style={{
           flex:1,
           color: 'grey',
           fontSize: 10,
           fontFamily: 'Poppins-Poppins-Medium',
           }}>{cat.prefix}
          </Text>
         </TouchableOpacity>
       ) : null
     }
     </View>
    )

      return (
        <View style={styles.container}>
          <View style={styles.shapeBackground}></View>
          <View style={styles.headerAlign}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.headerText}>Unit Converter</Text>
              ) : null
            }  
          </View>

          <View>
              {ListCate}
          </View>

        </View>
      )
    }
}

export default HomeScreen






{/* <View>
  <SearchBar
    placeholder="Search here"
    onChangeText={text => {
      console.log(text)
    }}
    onPressCancel={() => {
      this.filterList("");
    }}
    onPress={() => alert("onPress")}
  />
</View> */}


{/* <SearchBar
  lightTheme
  placeholder='Search'
  onChangeText={this.updateSearch}
  value={search}

  containerStyle={{
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 300,
    // borderRadius: 0,
  }}

  inputStyle={{
    // backgroundColor: 'white'
  }} 
/>*/}

