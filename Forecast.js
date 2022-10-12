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
            {this.props.temp}
        </Text>
    </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        bigContainer : {
        flex:1,
        width : 400,
        justifyContent: "center",
        alignItems:"center",
        fontFamily: 'Lobster-Regular' 
    },
    mediumContainer : {
        color: "yellow", 
        fontSize: 30
    },
    smallContainer: {
        fontSize: 25,
        color: '#FF9875'
    }
}
);
export default Forecast;