import React, { Component } from 'react';
import './App.css';

const EXPERIENCE = {
  companyName: '',
  role: ''
};

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    position: '',
    executiveSummary: '',
    experiences: [
      {
        ...EXPERIENCE
      }
    ]
  };

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateExperienceAtIndex = (index, fieldName, value) => {
    this.setState({
      experiences: this.state.experiences.map((experience, i) => {
        if (i === index) {
          experience[fieldName] = value;
        }
        return experience;
      })
    });
  };

  addExperience = () => {
    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          ...EXPERIENCE
        }
      ]
    });
  };

  removeExperienceAtIndex = index => {
    this.setState({
      experiences: this.state.experiences.filter((exp, i) => index !== i)
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movify CV generator</h1>
        </header>
        <div className="App-intro">
          <form>
            <fieldset>
              <legend>Information:</legend>
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" name="firstName" value={this.state.firstName} onChange={this.updateState}/>
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" name="lastName" value={this.state.lastName} onChange={this.updateState}/>
              <label htmlFor="position">Position</label>
              <input id="position" type="text" placeholder="Position" name="position" value={this.state.position} onChange={this.updateState}/>
            </fieldset>
            <hr/>
            <fieldset>
              <legend>Executive summary</legend>
              <textarea onChange={this.updateState} value={this.state.executiveSummary}/>
            </fieldset>
            <hr/>
            <div>
              {this.state.experiences.map((experience, index) => (
                <fieldset key={index}>
                  <legend>Professional experience:</legend>
                  <label htmlFor="companyName">Company name</label>
                  <input id="companyName" type="text" name="companyName" value={experience.companyName} onChange={event => this.updateExperienceAtIndex(index, event.target.name, event.target.value)}/>
                  <label htmlFor="role">Role</label>
                  <input id="role" type="text" name="role" value={experience.role} onChange={event => this.updateExperienceAtIndex(index, event.target.name, event.target.value)}/>
                  <button type="button" onClick={() => this.removeExperienceAtIndex(index)}>Remove experience</button>
                </fieldset>
              ))}
              <button type="button" onClick={this.addExperience}>Add experience</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
