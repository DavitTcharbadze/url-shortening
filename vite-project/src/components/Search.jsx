import React from 'react'
import classes from '../modules/Search.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function FirstSection() {
  const [url, SetUrl] = useState('')
  const [newUrl, SetNewUrl] = useState('')

  const onChangeHandler = (e) => {
    SetUrl(e.target.value)
  }
  async function ShortUrl() {
    try {
      const response = await axios.post('https://cleanuri.com/docs')
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={classes['search-wrapper']}>

      <input 
      onChange={onChangeHandler}
      value={url}
      className={classes['main-input']} 
      type="url" />
      <button onClick={ShortUrl} className={classes['shorten-button']}>Shorten It!</button>
    </div>
  )
}