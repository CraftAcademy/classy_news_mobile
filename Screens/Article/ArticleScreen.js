import React, { Component } from 'react'
import { Image } from 'react-native-elements'
import { Header } from '../Home/Header'
import { Text, 
         View, 
         StyleSheet, 
         FlatList } from 'react-native'

export default class ArticleScreen extends Component {
  state = {
    fullArticle: this.props.navigation.getParam(
      "fullArticle",
      "this field is default value if article is empty"
    ),
    selectedArticle: this.props.navigation.state.params.selectedArticle,
    message: this.props.navigation.state.params.message
  }

  renderSelectedArticles = ({ item }) => {
    debugger
    let article = item
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Hello World from Article Screen!</Text>
        {/* <Image style={styles.image} source={{ uri: this.state.article.image }}/>
        <Text style={styles.title}>{this.state.article.title}</Text>
        <Text style={styles.content}>{this.state.article.content}</Text>
        <Text style={styles.author}>{this.state.article.author}</Text> */}
      </View>
    )
  }

  render(){
    return (
      <View>
         <Header style={{flex:2}}/>
        <Text style={styles.content}>{this.state.selectedArticle[0]}</Text>
        <Text style={styles.content}>{this.state.message}</Text>
        <FlatList 
          data={this.state.fullArticle}
          renderItem={this.renderSelectedArticles}
          keyExtractor={item => item.id.toString()}
        />
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