import axios from 'axios'

const url = 'https://classy-news-backend.herokuapp.com/'

export const GetArticles = async () => {
  try {
    let response = await axios.get(url + 'api/v1/articles')
    const articles = response.data.articles
    return articles
  } catch (error) { 
    console.log(error)
    return error
  }
}