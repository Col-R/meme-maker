import React from 'react'

import './Meme.css'

const Meme = () => {
  return (
    <div className = 'main'>
        <form className = "form" action = "">
            <input type = "text" className = "form__input" placeholder='top text'/>
            <input type = "text" className = "form__input" placeholder='bottom text'/>
            <button id = "submit__button">
            generate meme 🖼
            </button>
        </form>
    </div>
  )
}

export default Meme