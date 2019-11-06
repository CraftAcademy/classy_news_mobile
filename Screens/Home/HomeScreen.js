import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GetArticles } from '../../Services/ArticlesAPIService';

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
        <Text>{article.title}</Text>    
        <Text>{article.content}</Text> 
      </View>
    )
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <FlatList data={this.state.articles}
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
