import React, { Component } from 'react';
import { ImageBackground, TextInput, StyleSheet, Text, View,  NativeModules } from 'react-native';
import Images from './asset/images';
import Forecast from './Forecast';
import Openweather from './openweathermap';

export default class App extends Component {



  state = {
    forecast: null
  };



  handleTextChange = event => {

    if(event.nativeEvent.text.toLowerCase() === 'crashme') {
      const { CrashTester: NativeModule } = NativeModules;
      const err =  new Error('Deliberate native crash');
      console.error(err)
      NewRelic.recordError(err);
      NativeModule.nativeCrash(`Forbidden City!! - ${err}`);
    } else {

      let zip = event.nativeEvent.text;
      Openweather.fetchForecast(zip).then(forecast => {
        //console.log(forecast);
        this.setState({ forecast: forecast });
      });
    }
  };



  render() {

    //This is the parameters to be passed to Forecast Component 

    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp} />
      );
    }



    return (

      //This is our main return of rendering that is what will be displayed   

      <View style={styles.container}>
        <ImageBackground source={Images.first} style={styles.input1}>
          <Text style={styles.text}>Enter Your City:</Text>
          <TextInput style={styles.input}
            onSubmitEditing={this.handleTextChange}
            underlineColorAndroid="transparent"
          />
          {content}
        </ImageBackground>
      </View>


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  text: {
    color: 'white',
    fontFamily: "Helvetica",
    fontSize: 30
  },
  input: {
    borderRadius: 30,
    borderWidth: 2,
    fontSize: 20,  
    color: "black",
    backgroundColor: 'white',
    width: 250,
    padding:5
  },
  input1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%'
  }
});
