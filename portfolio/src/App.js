import React, { Component } from "react";
import Projects from "./Projects";

class App extends Component {
    state = { displayBio: false }

//   constructor() {
//     super();
//     this.state = { displayBio: false };

//     console.log('Component this', this);
  
//     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

//     this.toggleDisplayBio = () => { ... };
//   }

  toggleDisplayBio = () => {

    this.setState({ displayBio: !this.state.displayBio});
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>i like things</p>
        <p>see ya</p>
        {this.state.displayBio ? (
          <div>
            <p>I Live somewhere nice, you're welcome any time really!</p>
            <p>I like Programming and Drumming and strongly believe that both go hand in hand.</p>
            <p>Knock Knock?? hehe </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio} >Read More</button>
            </div>
        )}
        <hr />
        <Projects />
      </div>
    );
  }
}
export default App;
