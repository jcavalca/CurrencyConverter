import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, Keyboard} from 'react-native';


const styles = StyleSheet.create({
  container: {
    left: 0, 
    bottom: 0, 
    right: 0
  }
});

export const KeyboardSpacer = ({onToggle}) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0);

    useEffect(() => {
      const showListener = Keyboard.addListener('keyboardDidShow', (event) => {
        const endY = event.endCoordinates.screenY;
        const screenHeight = Dimensions.get('window').height;

        setKeyboardSpace(screenHeight - endY + 20);
        onToggle(true);
      });
      const hideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardSpace(0);
        onToggle(false);
    });      

      return () => {
        showListener.remove();
        hideListener.remove();
      };
    }, [onToggle])

    return <View style={[styles.container, {height: keyboardSpace}]} />;
};