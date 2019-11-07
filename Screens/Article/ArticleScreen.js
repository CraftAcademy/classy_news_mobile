import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ArticleScreen extends Component {
  state = {
    message: this.props.navigation.getParam(
      'message',
      'this field is default value if message is empty'
    ),
    anotherMessage: this.props.navigation.state.params.anotherMessage
  }

  render(){
    return (
      <View>
        <Text>Hello World from Article Scren!!!</Text>
        <Text>{this.state.message}</Text>
        <Text>{this.state.anotherMessage}</Text>
      </View>
    )
  }
}