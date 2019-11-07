import React, { Component } from 'react'
import HomeScreen from "./Screens/Home/HomeScreen"
import AppNavigator from './AppNavigator'

export default class App extends Component {
  render(){
    return (
      <>
       <HomeScreen />
       <AppNavigator />
      </>
    )
  }
}