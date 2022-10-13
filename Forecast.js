import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Forecast extends Component {
    render(){
        
        return(
    <View style={styles.bigContainer}>
        <Text style = {styles.mediumContainer}>
           {this.props.main}
        </Text>
        <Text style={styles.smallContainer}>
           Current Conditions : {this.props.description}
        </Text>
        <Text style = {styles.smallContainer}>
            {`${parseFloat(this.props.temp/10).toFixed(2)}℃`}
        </Text>
    </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        bigContainer: {
            marginTop:20,
            flex: 0.3,
            backgroundColor: '#009bcbf0',
            width: 400,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            fontFamily: 'sans-serif'
        },
        mediumContainer: {
            // color: "yellow", 
            fontSize: 30
        },
        smallContainer: {
            fontSize: 25,
            color: '#FF9875'
        }
    }
);
export default Forecast;