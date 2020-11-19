// Config starter code
// import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
const config = {

  initialMessages: [createChatBotMessage("Hi!, I am Beatrice,  QuicHealth  assistant chatbot. What would you like to do today?" 
 
)],

  customComponents: {
    // Replaces the default header
    header: () => null
 },


}

export default config