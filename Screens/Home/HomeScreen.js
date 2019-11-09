import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { authenticate } from '../../Services/AuthService'
import LoginForm from './LoginForm'
import { GetArticles } from '../../Services/ArticlesApiService';
import { Image } from 'react-native-elements'
import {Header} from './Header'

export default class HomeScreen extends Component {
  state = { 
    renderLoginForm: false,
    authenticated: false,
    email: '',
    password: '',
    user: '',
    articles: []
  }

  async componentDidMount() {
    let response = await GetArticles()
    this.setState({
      articles: response
    })
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
      return console.log('Signed in successfully')
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
  
  render() {
    let renderLogin = this.renderLogin()

    return (
      <View style={styles.container}>
        <Header style={{flex:2}}/>
        {renderLogin}
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
    margin: 25,
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: '#505050'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'stretch',
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