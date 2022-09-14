import React, { useState } from 'react'
import './Meme.css'

// data
import memesData from '../memesData.js';

const Meme = () => {

  let [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  const getRandomMeme = function() {
    const memesArray = allMemeImages.data.memes
    const randomInt = Math.floor(Math.random() * memesArray.length + 1);
    const url = (memesArray[randomInt].url)
    setMeme (prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <div className = 'main'>
        <div className = "form">
            <input type = "text" className = "form__input" placeholder='top text'/>
            <input type = "text" className = "form__input" placeholder='bottom text'/>
            <button id = "submit__button" onClick = {getRandomMeme}>
            generate meme 🖼
            </button>
        </div>
        <img src={meme.randomImage} alt="meme"/>
    </div>
  )
}

export default Meme