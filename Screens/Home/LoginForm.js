import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const LoginForm = props => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={props.emailPasswordHandler.email}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={props.emailPasswordHandler.password}
      />
      <TouchableOpacity 
      styles={styles.submitButton}
      onPress={props.loginHandler}
      >
      <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
export default LoginForm

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor:  "#7a42f4",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
})