import React from 'react'
import troll from '../images/troll-face.png'
import memesData from '../memesData.js'

export default function Meme() {

    const [getImage, setGetImage] = React.useState({
        url: troll, 
        name: "troll",
        top: "Top",
        bottom: "Bottom"
    })

    function getImg() {
        let topText = document.getElementById("meme-start-text")
        let bottomText = document.getElementById("meme-end-text")

        let length = memesData.data.memes.length
        console.log("Length: " + length)
        let imgId = memesData.data.memes[Math.floor(Math.random()*length)]
        
        setGetImage({
            url: imgId.url, 
            name: imgId.name,
            top: topText.value,
            bottom: bottomText.value
        })

    }

    return (
        <section className="meme--container"> 
            <div className="grid-container">
                <div><input type="text" id="meme-start-text" placeholder="Top text"/></div>
                <div><input type="text" id="meme-end-text" placeholder="Bottom text"/></div>
            </div>


            <div className="button--generate-meme-image">
                <button onClick={getImg}>Get a new Meme image 🖼️</button>
            </div>

            <div className="image--wrapper">
                <div className="image--container">
                    <div className="meme-text">{getImage.top}</div>
                    <div><img src={getImage.url} alt={getImage.name} /></div><div className="meme-text">{getImage.bottom}</div>
                </div>
            </div>

        </section>      
    )
}