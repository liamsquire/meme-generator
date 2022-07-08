import React from 'react'
import troll from '../images/troll-face.png'

export default function Meme() {
    return (
        <section className="meme--container">
            <div className="grid-container">
                <div><input type="text" id="meme-start-text" /></div>
                <div><input type="text" id="meme-end-text" /></div>
                <div className="button--meme-image"><button>Get a new Meme image 🖼️</button></div>
                <div className="meme--image"><img src={troll} alt="Troll face" /></div>
            </div>
        </section>      
    )
}