import React from 'react'
import troll from '../images/troll-face.png'
import memesData from '../memesData.js'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        url: troll,
        name: "troll",
        top: "Top text",
        bottom: "Bottom text"
    })


    function getMeme() {
        const allMemes = memesData.data.memes
        let length = allMemes.length
        let topText = document.getElementById("meme-start-text")
        let bottomText = document.getElementById("meme-end-text")
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                url: allMemes[Math.floor(Math.random()*length)].url,
                top: topText.value,
                bottom: bottomText.value
            }
        })
    }

    function addTextToMeme() {
        let topText = document.getElementById("meme-start-text")
        let bottomText = document.getElementById("meme-end-text")
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                top: topText.value,
                bottom: bottomText.value
            }
        })
    }

 

    return (
        <section className="meme--container"> 
            <div className="grid-container">
                <div><input type="text" id="meme-start-text" placeholder="Top text" onKeyUp={addTextToMeme}/></div>
                <div><input type="text" id="meme-end-text" placeholder="Bottom text" onKeyUp={addTextToMeme}/></div>
            </div>


            <div className="button--generate-meme-image">
                <button onClick={getMeme}>Get a new Meme image 🖼️</button>
            </div>

            <div className="image--wrapper">
                <div className="image--container">
                    <div className="meme-text" id="memeTextTop">{meme.top}</div>
                    <div><img src={meme.url} alt={meme.name} /></div><div className="meme-text"  id="memeTextBottom">{meme.bottom}</div>
                </div>
            </div>

        </section>      
    )
}