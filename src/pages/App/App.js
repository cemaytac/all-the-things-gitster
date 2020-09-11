import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import BensThings from '../BensThings/BensThings'

class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
  
  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/themanliestthings">Ben's Things</a> 
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/themanliestthings'
          render={() => 
            <BensThings 
              bensThings={this.state.bensThings}
            />
        }/>
      </>
      
    );
  }
}
 
export default App;

