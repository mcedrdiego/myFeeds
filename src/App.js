import React, {Component} from 'react'
import Home from './screens/Home'
import AddFeed from './screens/AddFeed'
import ReadFeed from './screens/ReadFeed'

import {createStackNavigator, createAppContainer} from 'react-navigation'

const Navigator = createStackNavigator({
  Home:Home,
  AddFeed: AddFeed,
  ReadFeed: ReadFeed
},
{
  initialRouteName:"Home",
  mode:'modal',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#222831'
    },
    headerTitleStyle:{
      fontWeight:'100',
    },
    headerTintColor:'white'
  }
})

const App = createAppContainer(Navigator)

export default App