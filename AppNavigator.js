import { createAppContainer } from 'react-navigtion'
import { createStackNavigator } from 'react-navigarion-stack'
import HoemScreen from './Screens/Home/HomeScreen'
import ArticleScreen from './Screens/Article/ArticleScreen'
import { NativeComponent } from 'react-native';

const NavStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Article: { screen: ArticleScreen }
})

const AppNavigator = createAppContainer(NavStack)

export default AppNavigator