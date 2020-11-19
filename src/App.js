import React, {Component} from "react";
import Chatbot from "react-chatbot-kit";
import logo from './chatbotComponents/sub-image.jpeg'
import config from "./chatbotComponents/config";
import ActionProvider from "./chatbotComponents/ActionProvider";
import MessageParser from "./chatbotComponents/MessageParser";
import "./App.css";


class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          display: false
      }
      this.handleDisplay = this.handleDisplay.bind(this)
  }

  handleDisplay(){
      // console.log("hello")
      this.setState((prevState) => {
          return{
              display: !prevState.display
          }
      })
  }

  render(){
      let displayChat = this.state.display ? <Chatbot 
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}/> : null
      return(
          <div className="App">
              <button onClick = {this.handleDisplay} className = "app-chatbot-button">
                  <img src= {logo} alt="sub-img" className = "app-chatbot-button-icon"/>
              </button>
              <div style={{ maxWidth: "310px" }}> 
              {displayChat}
              </div>
          </div>
      )
  }
}

export default App

// import "./App.css";
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link,
//     Redirect
// } from 'react-router-dom'
// import Bot1 from './Bots/bot1'
// import Home from './Bots/bot2'

// class App extends Component{
//     constructor() {
//         super();
//         this.state = {
//           name: "React",
//           isUserAuthenticated: true
//         };
//       }
//   render(){
//       return(
//         <div>
//         <Router>
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={() => {
//                     return (
//                       this.state.isUserAuthenticated ?
//                       <Redirect to="/bot1" /> :
//                       <Redirect to="/bot2" /> 
//                     )
//                 }}
//               />
//                <Route exact path="/bot1" component={Bot1} />
//               <Route exact path="/bot2" component={Home} />
//               <Route exact path="/bot1" component={Bot1} />
//               <Route exact path="/bot1" component={Bot1} />
//             </Switch>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App
