import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

const MovableButton = () => {
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Update the position of the button based on the gesture
        setPosition({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: () => {
        // Handle release if needed
      },
    })
  );

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <View
      style={[styles.buttonContainer, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.buttonText}>Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 50,
    flex: 1
  },
  buttonText: {
    color: 'red',
    fontSize: 30
  },
});

export default MovableButton;
