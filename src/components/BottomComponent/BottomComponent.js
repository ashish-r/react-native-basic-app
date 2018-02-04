import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, ScrollView} from 'react-native';



const BottomComponent = (props) => {
    const a  = props.appended.map(
        (singleVal, i) => 
        (<View style = {styles.listElement}  key = {i}>
        <TouchableNativeFeedback onPress={() => {props.lisItemPress(i)}}><Text>{singleVal.value}</Text></TouchableNativeFeedback></View>));
    return(
    <ScrollView><View style={styles.container}>
    {a}
    </View></ScrollView> )
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