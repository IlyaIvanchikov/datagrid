import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoader, SetIsLoader] = useState(true)

  useEffect(async () => {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )
  })

  return <div className="container">MyApp</div>
}

export default App
