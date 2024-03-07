import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello');
  }
  
  return (
    <>
    <section className='container'>
    <h3>color generater</h3>
    </section>
    <section className="colors">
      <h4>list goes here</h4>
    </section>
    </>
  )
}

export default App
