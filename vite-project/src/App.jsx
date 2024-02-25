import { useState } from 'react'
import classes from './modules/App.module.scss'
import Search from './components/Search'

function App() {

  return (
    <div className={classes['main-wrapper']}>
      <Search />

      
    </div>
  )
}

export default App
