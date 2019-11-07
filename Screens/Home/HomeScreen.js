import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GetArticles } from '../../Services/ArticlesApiService';
import { Image } from "react-native-elements"

export default class HomeScreen extends Component {
  state = { 
    articles: []
  }

  async componentDidMount() {
    let response = await GetArticles()
    this.setState({
      articles: response
    })
  }

  renderArticles = ({ item }) => {
    const article = item
    return (
      <View>
        <Image 
          style={styles.image}
          source={{ uri: article.image }}
        />
        <Text style ={styles.title} >
          {article.title}
        </Text>    
        
        <Text style={styles.content}>
          {article.content}
        </Text> 
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Classy News</Text>
        <FlatList 
          data={this.state.articles}
          renderItem={this.renderArticles}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 30,
    fontSize: 40,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"

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
  }
});