import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

import colors from "../constants/colors"

const styles = StyleSheet.create({
  button: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 20
  }, 
  buttonIcon: {
    marginRight: 10,
    width: 20, 
    height: 20
  }, 
  buttonText: {
    color: colors.white, 
    fontSize: 16
  }
});

export const Button = ({onPress, text}) =>  {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image 
        source={require("../assets/images/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};