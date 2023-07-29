import React from 'react'
import './App.css'
import ShoppingCart from './components/ShoppingCart'
import TodoList from './components/TodoList'
import Test from './components/Test'
import Navbar from './routing/Navbar'
import Routing from './routing/Routing'
import Media from './components/Media'
import AudioPlayer from './components/AudioPlayer'

import AutoLayoutExample from './reactWithBootstrap/Sample'
import DownloadFile from './components/DownloadFile'
import { ContactUs } from './components/ContactUs'
import SearchFilter from './components/SearchFilter'

const App = ({local_variable, IncAction, DecAction}) => {
  return (
    <div>
      {/* <ShoppingCart />
      <TodoList />
      <Test /> */}
      {/* <ChartComponent /> */}
      {/* <Routing /> */}
      {/* <Media /> */}
      {/* <AudioPlayer /> */}
      {/* <Counter /> */}
      {/* <AutoLayoutExample /> */}
      {/* <DownloadFile /> */}
      {/* <ContactUs /> */}
      <SearchFilter />
      
    </div>
  )
}


export default App;
