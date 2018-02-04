import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, FlatList} from 'react-native';



const BottomComponent = (props) => {
    return(
    <FlatList data = {props.appended} 
    renderItem = {info => (<View style = {styles.listElement} >
        <TouchableNativeFeedback onPress={() => {props.lisItemPress(info.item.key)}}><Text>{info.item.value}</Text></TouchableNativeFeedback></View>
    )}/>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      height: "60%",
      flexWrap : "wrap",
      backgroundColor: '#ddd',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 5,
      marginTop: 30,
      flexDirection: "row",
    },
    listElement :{
      backgroundColor: 'red',
      padding: 10,
      margin: 5,
      
    }
});

export default BottomComponent;