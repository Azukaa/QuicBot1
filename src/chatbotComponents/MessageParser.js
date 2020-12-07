// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      this.lowercase = "";
    }
  
    parse(message) {
      // console.log(message);
      this.lowercase = message.toLowerCase();
      // console.log(this.lowercase)
      if (this.lowercase.includes("hello") || this.lowercase.includes("hey") || this.lowercase.includes("hi")){
        this.actionProvider.greet();
      }else if(this.lowercase.includes("talk" && "specialist") || this.lowercase.includes("talk" && "doctor") || 
    this.lowercase.includes("see" && "doctor") || this.lowercase.includes("see" && "specialist") || 
    this.lowercase.includes("appointment") || this.lowercase.includes("doctor")){
        this.actionProvider.handleBookAppointment();
      }else if(this.lowercase.includes("register") || this.lowercase.includes("login") || this.lowercase.includes("create" &&"account")){
        this.actionProvider.handleRegisterLogin();
      }
      else{ 
        this.actionProvider.notUnderstood()
      }
    }
  }
export default MessageParser;