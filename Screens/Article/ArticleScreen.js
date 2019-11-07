import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
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
      <View style={styles.container}>
        <Text>Hello World from Article Screen!!!</Text>
        <Image style={styles.image} src={this.state.article.image} />
        <Text style={styles.title}>{this.state.article.title}</Text>
        <Text style={styles.content}>{this.state.article.content}</Text>
        <Text style={styles.author}>{this.state.article.author}</Text>
      </View>
    )
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 130, 
    height: 100,
    marginLeft: 20,
    padding:90
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  content:{
    margin:1,
    padding: 10,
    fontSize: 25,
    fontFamily: 'Cochin',
    color: '#363737'
  },
  author: {
    padding: 10,
    fontSize: 20,
    fontFamily: 'Cochin',
    fontStyle: 'italic',
    color: '#585959'
  }
})