import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

        const [extended,setExtended] = useState(false);
        const {onSent, setRecentPrompt, prevPrompts, newChat} = useContext(Context);
        const loadPrompt = async(prompt) =>{
            await onSent(prompt);
        }
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev => !prev)} src={assets.menu_icon} alt="" className="menu" />
            <div className="new-chat" onClick={newChat}>
                <img src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>

            {extended ? (<div className="recent">
                <div className="recent-title">
                    Recent
                </div>
                {prevPrompts.map((item,index)=>(
                     <div className="recent-entry" key={item} onClick={()=>loadPrompt(item)}>
                     <img src={assets.message_icon} />
                     <p>{item.slice(0,15)}...</p>
                 </div>
                ))}
               
            </div>) : null}

        </div>

        <div className="bottom" style={{alignItems:extended? "" : "center"}}>
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar