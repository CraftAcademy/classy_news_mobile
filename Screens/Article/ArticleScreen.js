import React, { Component } from 'react'
import { Image } from 'react-native-elements'
import { Header } from '../Home/Header'
import { Text, 
         View, 
         StyleSheet, 
         FlatList } from 'react-native'

export default class ArticleScreen extends Component {

  renderSelectedArticles = ({ item }) => {
    let article = item
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: article.image }}/>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
        <Text style={styles.author}>{article.author}</Text> 
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const chosenArticle = navigation.getParam('selectedArticle', 'No article to be found');  
    return (
      <View style={styles.container}>
        <Header style={{flex:2}}/>
         <FlatList 
          data={chosenArticle}
          renderItem={this.renderSelectedArticles}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
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
    alignSelf: 'center',
    width: 350,
    height: 200,
    marginLeft: 20
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