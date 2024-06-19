import React,{useContext} from 'react'
import "./Main.css"
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

    const loadPrompt = async(prompt) =>{
        await onSent(prompt);
    }

    const cards = [
        {
            id : 1,
            txt : "Suggest beautiful places to see on an upcoming road trip",
            icon : assets.compass_icon
        },
        {
            id : 2,
            txt : "Briefly summarize this concept : urban planning",
            icon : assets.bulb_icon
        },
        {
            id : 3,
            txt : "Brainstorm team bonding activities for our work retreat",
            icon : assets.message_icon
        },
        {
            id : 4,
            txt : "Improve the readability of the following code",
            icon : assets.code_icon
        }
    ]

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>

        
        <div className="main-container">
        {!showResult ? 
            <>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p style={{marginTop:"-20px",lineHeight:"1"}}>How can I help you today?</p>
            </div>
            <div className="cards">
                {cards.map((card)=>(
                    <div className="card" key={card.id} onClick={()=>loadPrompt(card.txt)}>
                        <p>{card.txt}</p>
                        <img src={card.icon} alt=""/>
                    </div>
                ))}
            </div>
            </>
            :
            (<div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                   
                    {loading ? 
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }

                </div>
            </div>)
        }
        
            <div className="main-bottom">
                <div className="search-box">
                    <input
                    value = {input}
                    onChange = {(e)=> setInput(e.target.value)}
                    type="search" placeholder='Enter your promp here' />
                    <div>
                        <img src={assets.gallery_icon} alt=""/>
                        <img src={assets.mic_icon} alt=""/>
                        {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt=""/> : null}
                    </div>
                </div>
                <div className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double check its responses, Your privacy and Gemini Apps
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;