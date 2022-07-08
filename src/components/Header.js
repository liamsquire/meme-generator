import React from 'react'
import troll from '../images/troll-face.png'

export default function Header() {
    return (
        <header>
            <img src={troll} />
            <h1>Meme Generator</h1>
            <div className="site--title">React Course - Project 3</div>
        </header>
    )
}