import React, { useState, useEffect, Suspense } from 'react'
import './App.css'
import { connect } from 'react-redux'
import TableInfo from './Table/Table'
import Loader from './Loader/Loader'

function App() {
  // const [isLoader, SetIsLoader] = useState(true)

  // useEffect(() => {
  //   SetIsLoader(false);
  // })
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <TableInfo />
      </Suspense>
    </div>
  )
}

export default App
