import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const goalInputHandler = function (e) {
    setEnteredText(e);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
