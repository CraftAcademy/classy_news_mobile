import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'

export default class ArticleScreen extends Component {
  state = {
    fullArticle: this.props.navigation.getParam(
      'fullArticle',
      'this field is default value if article is empty'
    )
  }

  render(){
    return (
      <View>
        <Text>Hello World from Article Scren!!!</Text>
        <Image src={this.state.article.image} />
        <Text>{this.state.article.title}</Text>
        <Text>{this.state.article.content}</Text>
        <Text>{this.state.article.author}</Text>
      </View>
    )
  }
}