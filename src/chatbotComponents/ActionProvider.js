// ActionProvider starter code
// Import React from 'react';
import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage,value) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      
    };

    
    greet = () => {
        
        let message = this.createChatBotMessage("Hi!, I am Beatrice,\r\n QuicHealth assistant chatbot. What would you like to do today?", 
        //     {
        //     widget: "options",
        // }  
    );
        this.addMessageToState(message);
    }
    handleRegisterLogin = () => {
        const data = () => {
            return (
                <div>
                    <p>
                    Click the link to Create an account or Sign in into your Quichealth account:
                    <a href = "http://localhost:3000/signIn.html" className = "links" >localhost:3000/signIn.html</a>
                    </p>
                </div>
            )
        }
        const message = this.createChatBotMessage(data());
        this.addMessageToState(message)
      
    }
    handleBookAppointment = () => {
        const data = () => {
            return (
                <div>
                    <p>
                    Click the link to book an appointment:
                    <a href = "http://localhost:3000/select_appointment.html" className = "links" >
                    Select Appointment</a>
                    </p>
                </div>
            )
        }
        const message = this.createChatBotMessage(data());
        this.addMessageToState(message);
    }


    // d

    notUnderstood = () => {
        const message = this.createChatBotMessage("I don't seem to fully understand what you want, Do you want to talk to a doctor? or you can re-enter your input");
        this.addMessageToState(message);
    }

    addMessage = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }
  }
  
  export default ActionProvider;