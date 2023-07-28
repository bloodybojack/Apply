/**
 * 
 * TODO:
 *  - Better Stylization
 *    ~ Use App state to make sure the colors aren't duped, and send the color over thru a prop  [**DONE**]
 *    
 *    + The emoji next to the date changes depending upon the season  [**DONE**]
 *      + Sept. 22 to Dec. 20 for fall 🍂
 *      + Dec. 21 to Mar. 19 for winter 🌲
 *      + Mar. 20 to Jun. 21 for spring 🌻
 *      + Jun. 22 to Sept. 21 for summer 🌺
 *    
 *    + Open button changes matches background color of the <Date/> on the screen
 *  
 *
 *  - Dynamic date [**DONE**]
 *    + Current date when the listing was added
 *    + The relative time from when it was added (ex. 2 weeks ago, 1 month ago)
 *  
 * - Input
 *    
 *    + Add labels [**DONE**]
 *      + Create an input for unique headers
 *      + Adding bullet point list (really just a linebreaked list) automatically converts to a <ul>
 *    
 *    + Add functionality
 *      + Check if inputs are filled [**DONE**]
 *      + Submit form to be processed [**DONE**]
 *      + Show approved screen (fade in green bg with checkmark saying "Submitted!")
 *      + On submit, screen should disappear and reset all forms values         
 *      + Media Queries (ugh)                                                    
 *  
 *  - Searchbar
 *    ~ It would probably be more effecient to just search through job titles, companies, dates and MAYBE summaries. no need to go thru job duties and etc. 
 */

import moment from 'moment';
import './App.css';
import { ReactComponent as MySVG } from './MAGNIFYING GLASS.svg';
import React from 'react';
import { Date } from './Components/Date/Date';
import { Input } from './Components/Input/Input';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { AppList } from './Components/AppList/AppList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    
      color: 'transparent', 
      
      rip: [
      'juice wrld',
      'lil peep',
      'xxxtentacion',
      'dmx',
      'her\'s',
      'nipsy hustle',
      'avicii',
      'chester bennington',
      'ian curtis',
      'jimi hendrix',
      'kurt cobain',
      'mac miller',
      'biggy',
      'the rev',
      'craig lorentson'],
      
      params: {
        title: '',
        src: '',
        type: '',
        company: '',
        location: '',
        pay: '',
        summary: '',
        duties: [],
        skills: [],
        qualifications: [],
        notes: []
      },
      
      applications: [{
        title: 'default object',
        src: '',
        type: '',
        company: '',
        location: '',
        pay: '',
        summary: '',
        duties: [],
        skills: [],
        qualifications: [],
        notes: []}, '']
    };
    
    // bindings
    this.getColor = this.getColor.bind(this);
    this.rip = this.rip.bind(this);
    this.updateApps = this.updateApps.bind(this);
  }

  // This pretty much works, but it works based on the assumption that <Input/> and localstorage is setup
  getColor() {
    const colors = [
      'rgb(204, 75, 194)',
      'rgb(108, 58, 92)',
      'rgb(64, 71, 109)',
      'rgb(240, 201, 135)',
      'rgb(219, 76, 64)'
    ];
    const dates = document.querySelectorAll('.date');
    const last = dates[dates.length-1];
    /* const last_color = window.getComputedStyle(last).backgroundColor; */

    function generateColor() {
      return Math.floor(Math.random() * colors.length);
    }
    
    let random_color = colors[generateColor()];

    /* while (random_color === last_color) {
      random_color = colors[generateColor()];
    } */
    // this.setState({ color: random_color }, console.log(this.state.color));
    return random_color;
  }

  showInput() {
    document.getElementById('input').style.display = 'flex';
  }

  updateApps(params) {
    
    let old_list = this.state.applications;
    console.log(old_list);
    let new_list;

    if (old_list[0] === undefined)  {
      console.log(`undefinded for some reason`);
      console.log(old_list);
    } else if(old_list[0].title === 'default object') {
      console.log(`Still default. Making a new list starting with this application`);
      params.key = 0;
      new_list = [params];
      console.log(new_list);
    } else {
      params.key = this.state.applications.length + 1;
      new_list = old_list.concat(params);
    }

    console.log(new_list);


    this.setState({applications: new_list}, () => console.log(this.state.applications));
  }

  rip(button) {
    let random = Math.floor(Math.random() * this.state.rip.length);
    let artist = this.state.rip[random]
    button.target.innerHTML = `made by rip ${artist} / 2023`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.applications !== this.state.applications) {
      //console.log('updated');
    }
  }

  render() {

    return (
      <div>
        <div id="input">
          <h2>Enter in the job description</h2>
          <Input update={this.updateApps}/>  
        </div>
        
        <div id="open">
            <button onClick={this.showInput}>📄</button>
            <div></div>
        </div>
        
        <h1>App Tracker</h1>
        
        <nav id='searchDiv'>
          <MySVG id='svg'/>
          <Searchbar/>
        </nav>
        
        <main>
          <AppList apps={this.state.applications}/>
        </main>
        
        <p style={{textAlign: 'center'}}><button onClick={this.rip} id='footer'>made by rip lil peep / 2023</button></p>
      
      </div>
    );
  }
}

export default App;
