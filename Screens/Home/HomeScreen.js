import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'
import {GetArticles} from '../../Services/ArticlesAPiService'
import { authenticate } from '../../Services/AuthService'
import LoginForm from './LoginForm'

export default class HomeScreen extends Component {
  state = {
    articles = [],
    renderLoginForm: false,
    authenticated: false,
    email: '',
    password: '',
    user: ''
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
          {article.content}</Text> 
      </View>
    )
  }

  onLogin = async () => {
    let response = await authenticate(this.state.email, this.state.password)

    if (response.authenticated) {
      this.setState({
        authenticated: true,
        user: response.user
      })
    } else {
      return <View>Wrong password or email.</View>
    }
  }

  emailPasswordHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
              loginHandler={this.onLogin} 
              handleLogin={this.handleLogin}
              emailPasswordHandler ={this.emailPasswordHandler}
            />
          </View>
        )
      } else {
        return (
          <>
            <Button 
              title="Login"
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
        <Text style={styles.header}>Classy News</Text>
        <FlatList 
          data={this.state.articles}
          renderItem={this.renderArticles}
          keyExtractor={item => item.id.toString()}
        />
        {renderLogin}
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