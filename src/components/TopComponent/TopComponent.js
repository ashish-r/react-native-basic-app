import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const TopComponet = (props) => {return (
    <View style={styles.container}>
        <View style={styles.flexHalfText}>
            <TextInput value = {props.textInputValue} style={styles.textInputDesign} onChangeText={props.changeInputBoxText}/>
        </View>
        <View  style={styles.flexHalfButton}>
            <Button onPress = {props.alertInput} title = "Alert"/>
        </View>  
    </View>
)};


const styles = StyleSheet.create({
    container: {
      height: "25%",
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
      marginTop: 30,
      flexDirection: "row",
    },
    textInputDesign: {
      width: "100%",
      padding:5,
    },
    flexHalfText: {
      margin: 5,
      flex: 2
    },
    flexHalfButton: {
      margin: 5,
      paddingLeft:20,
      flex: 1
    }
});

export default TopComponet;