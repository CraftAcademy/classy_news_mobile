import axios from 'axios'
import { AsyncStorage } from 'react-native'

const apiUrl = 'https://classy-news-backend.herokuapp.com/'

const authenticate = async (email, password) => {
  const path = apiUrl + 'auth/sign_in'
  try {
    let response = await axios.post(path, {
      email: email,
      password : password
    })
    await storeAuthCredentials(response)
    const user = response.data.data.name
    ? response.data.data.name
    : response.data.data.email
    return { authenticated: true, user: user }
  } catch (error) {
    console.log(error)
    return { authenticated: false }
  }
}

const storeAuthCredentials = ({ headers }) => {
  return new Promise(resolve => {
    const uid = headers['uid'],
    client = headers['client'],
    accessToken = headers['access-token'],
    expiry = headers['expiry']

    AsyncStorage.setItem(
      'credentials',
      JSON.stringify({
        uid: uid,
        client: client,
        access_token: accessToken,
        expiry: expiry,
        token_type: 'Bearer',
        'Content-type': 'application/json',
        Accept: 'application/json'
      })
    )
    resolve(true)
  })
}

export { authenticate }
