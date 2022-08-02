import React from 'react'
import troll from '../images/troll-face.png'
import memesData from '../memesData.js'

export default function Meme() {

    // const [getImage, setGetImage] = React.useState({
    //     url: troll, 
    //     name: "troll",
    //     top: "Top text",
    //     bottom: "Bottom text"
    // })


    // function getImg() {
    //     let topText = document.getElementById("meme-start-text")
    //     let bottomText = document.getElementById("meme-end-text")

    //     let length = memesData.data.memes.length
    //     console.log("Length: " + length)
    //     let imgId = memesData.data.memes[Math.floor(Math.random()*length)]
        
    //     setGetImage({
    //         url: imgId.url, 
    //         name: imgId.name,
    //         top: topText.value,
    //         bottom: bottomText.value
    //     })

    // }

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



    // this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'meme-start-text');
    // this.handlePwdKeyUp = this.keyUpHandler.bind(this, 'meme-end-text');
    
    // keyUpHandler(refName, e) {
    //     console.log(refName);
    //     // prints either LoginInput or PwdInput
    // }

    return (
        <section className="meme--container"> 
            <div className="grid-container">
                <div><input type="text" id="meme-start-text" placeholder="Top text"/></div>
                <div><input type="text" id="meme-end-text" placeholder="Bottom text"/></div>
            </div>


            <div className="button--generate-meme-image">
                <button onClick={getMeme}>Get a new Meme image 🖼️</button>
            </div>

            <div className="image--wrapper">
                <div className="image--container">
                    <div className="meme-text">{meme.top}</div>
                    <div><img src={meme.url} alt={meme.name} /></div><div className="meme-text">{meme.bottom}</div>
                </div>
            </div>

        </section>      
    )
}