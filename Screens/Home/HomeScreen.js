import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { authenticate } from '../../Services/AuthService'
import LoginForm from './LoginForm'

export default class HomeScreen extends Component {
  state = {
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
      return <View>You are signed in.</View>
    } else {
      return <View>Wrong password or email.</View>
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
  
  render() {
    let renderLogin = this.renderLogin()

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Classy News</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
 }
});