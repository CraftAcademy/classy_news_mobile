import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GetArticles } from '../../Services/ArticlesApiService';
import { Image } from "react-native-elements"

export default class HomeScreen extends Component {
  state = { 
    aticles: []
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
          style={{ widht: 100, height: 100 }}
          source={{ uri: article.image }}
        />
        <Text>{article.title}</Text>    
        <Text>{article.content}</Text> 
      </View>
    )
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Hello from Homescreen</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
