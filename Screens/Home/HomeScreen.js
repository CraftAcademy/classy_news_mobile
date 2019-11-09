import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GetArticles } from '../../Services/ArticlesApiService';
import { Image } from 'react-native-elements'
import {Header} from './Header'

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
    let trim_ingress = article.content.substr(0, 75)
    let ingress = trim_ingress.substr(0, Math.min(trim_ingress.length, trim_ingress.lastIndexOf(" "))) + ' ...'
    return (
      <View style={styles.articles}>
        <Image 
          style={styles.image}
          source={{ uri: article.image }}
        />
        <Text style ={styles.title} >
          {article.title}
        </Text>    
        <Text style={styles.content}>{ingress}
        </Text> 
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={{flex:2}}/>
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
  articles: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    alignSelf: 'center',
    width: 300, 
    height: 200,
    marginLeft: 20
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  content: {
    margin:1,
    padding: 10,
    fontSize: 25,
    fontFamily: 'Cochin',
    color: '#363737'
  }
});