import React from 'react'
import './Header.css'

import cat from '../icons/cat1.png'

const Header = () => {
  return (
    <nav className = "navbar">
        <div className = "navbar__left">
            <img src={cat} alt="cat"/>
            <h1>Meme Generator</h1>
        </div>
        <p>React Project</p>
    </nav>
  )
}

export default Header