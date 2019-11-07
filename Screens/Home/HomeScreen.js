import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { authenticate } from '../../Services/AuthService'
import LoginForm from './LoginForm'
import { GetArticles } from '../../Services/ArticlesApiService'
import { Image } from 'react-native-elements'

export default class HomeScreen extends Component {
  state = {
    articles: [],
    renderLoginForm: false,
    authenticated: false,
    email: '',
    password: '',
    user: ''
  }
  
  renderLoginForm = () => {
    this.setState({
      renderLoginForm: true
    })
  }

  onLogin = async () => {
    let response = await authenticate(this.state.email, this.state.password)

    if (response.authenticated) {
      this.setState({
        authenticated: true,
        user: response.user
      })
    } else {
      console.log('error during onLogin function')
    }
  }

  emailStateHandler = text => {
    this.setState({
      email: text
    })
  }
  passwordStateHandler = text => {
    this.setState({
      password: text
    })
  }

  handleLogin = () => {
    const { email, password } = this.state
    onLogin({ email, password })
  }

  renderLogin = () => {
    if (this.state.authenticated){
      return <Text>Hi {this.state.user}</Text>
    } else {
      if (this.state.renderLoginForm) {
        return (
          <View>
            <LoginForm 
              onLogin={this.onLogin} 
              handleLogin={this.handleLogin}
              handleEmail={this.emailStateHandler}
              handlePassword={this.passwordStateHandler}
            />
          </View>
        )
      } else {
        return (
          <>
            <Button 
              title='Login'
              onPress={this.renderLoginForm}
            />
          </>
        )
      }
    }
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
        <Text>Here are articles:</Text>
        <Image
          style={styles.image}
          source={{ uri: article.image }}
        />
        <Text 
          style ={styles.title} >
          {article.title}
        </Text> 
        <Text 
          style={styles.content}>
          {article.content}
        </Text> 
        <Text 
          style={styles.author}>
          {article.author}
        </Text> 
        <Button
          title="View Article"
          onPress={() => this.showArticle()}
        />
      </View>
    )
  }

  showArticle() {
    this.props.navigation.navigate('Article', {
      fullArticle: this.state.fullArticle
    })
  }

  render() {
    let renderLogin = this.renderLogin()

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Classy News</Text>
        {renderLogin}
        <FlatList 
          data={this.state.articles}
          renderItem={this.renderArticles}
          keyExtractor={item => item.id.toString()}
        />
        <Text style={styles.header}>Trial from HomeScreen</Text>
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
 }
});