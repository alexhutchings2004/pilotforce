import React from 'react'
import './ChatBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const ChatBar = () => {
  return (
    <div className='chat-bar'>
      <button className='chat-button'><FontAwesomeIcon icon={faHeadset} /> New Chat</button>
    </div>
  )
}

export default ChatBar
