import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Main } from '../components/main'

export const Home = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}
