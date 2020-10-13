import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const queryTimer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)
    return () => clearTimeout(queryTimer)
  }, [query])
  
  useEffect(() => {
      axios.get(`https://www.breakingbadapi.com/api/characters?name=${debouncedQuery}`)
      .then(result => {
        setItems(result.data)
        setIsLoading(false)
      }).catch(err => console.log(err.message))
  }, [debouncedQuery])

  return (
    <div className="container">
        <Header />
        <Search setQuery={setQuery}/>
        <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
