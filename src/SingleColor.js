import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  return <h4>single color</h4>
}

export default SingleColor
