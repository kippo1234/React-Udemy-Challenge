import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from '../assets/nolan-avatar.png';

class App extends Component {
    state = { displayBio: false }

  toggleDisplayBio = () => {

    this.setState({ displayBio: !this.state.displayBio});
  }

  render() {
    return (
      <div>
      <img src={profile} alt='profile' className='profile'/>
        <h1>Hello</h1>
        <p>i like things</p>
         <Title /> 
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
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}
export default App;
