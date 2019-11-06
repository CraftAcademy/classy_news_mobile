import React, { Component } from 'react'
import HomeScreen from "./Screens/Home/HomeScreen"
import { Text } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <>
        <Text>Hello from App</Text>
        <HomeScreen />
      </>
    )
  }
}