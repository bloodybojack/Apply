import React from 'react';
import '../Input/Input.css';
import {Date} from '../Date/Date';
import moment from 'moment/moment';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '' ,
            src: '' ,
            type: '' ,
            company: '' ,
            location: '' ,
            pay: '' ,
            summary: '' ,
            duties: '' ,
            skills: '' ,
            qualifications: '' ,
            notes: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setEmployType = this.setEmployType.bind(this);
    }

    handleChange(param) {
        switch(param.target.name) {
            case 'title':
                this.setState({title: param.target.value});
                break;
            case 'src':
                this.setState({src: param.target.value});
                break;
            case 'company':
                this.setState({company: param.target.value});
                break;
            case 'location':
                this.setState({location: param.target.value});
                break;
            case 'pay':
                this.setState({pay: param.target.value});
                break;
            case 'summary':
                this.setState({summary: param.target.value});
                break;
            case 'duties':
                this.setState({duties: param.target.value});
                break;
            case 'skills':
                this.setState({skills: param.target.value});
                break;
            case 'qualifications':
                this.setState({qualifications: param.target.value});
                break;
            case 'notes':
                this.setState({notes: param.target.value});
                break;
            default:
                console.log('shits broke bruh');
        }
    }

    handleSubmit(event) {
        function split(string) {
            if(typeof string === 'string') {
                return string.split('\n');   
            }
        }

        // checks to see if all the necessary inputs were filled out
        function checker() {
            
            //inputs to check
            const title = document.getElementById('input_title');
            const src = document.getElementById('input_src');
            const location = document.getElementById('input_location');
            const employ = document.getElementById('input_employ_type');
            const summary = document.getElementById('input_summary');
            const company = document.getElementById('input_company');
            const input_array = [title, src, location, employ, summary, company]; 
            
            // if this ever becomes false, the entire check will return false
            let approval = true;
            for(let input of input_array) {
                // if anything comes back wrong, the check becomes unapproved
                if (input.value.length < 2 ) {
                    input.style.borderColor = 'red';
                    approval = false;
                } else {
                // makes a field go from unapproved to approved (essentially) by changing the border
                    input.style.borderColor = 'white';
                }
            }

            return approval;
        }
        
        // if all the necessary inputs aren't filled, it won't update the <App/>'s state 
        if(checker() === true) {
            let params = {
                title: this.state.title ,
                src: this.state.src ,
                type: this.state.type ,
                company: this.state.company  ,
                location: this.state.location  ,
                pay: this.state.pay  ,
                summary: split(this.state.summary) ,
                duties: split(this.state.duties) ,
                skills: split(this.state.skills) ,
                qualifications: split(this.state.qualifications) ,
                notes: split(this.state.notes),
                date: moment().format('MMMM Do YYYY')
            }
    
            this.props.update(params);
            this.hideScreen();
        }
        
        event.preventDefault();
    }

    
    hideScreen() {
        document.getElementById('input').style.display = 'none';
    }

    clearInputs() {

    }

    dropdown() {
        const menu = document.getElementById('dropdown_menu').style;
        if(menu.display === 'block') {
            menu.opacity = 0;
            setTimeout(() => menu.display = 'none' , 500);
        } else {
            menu.display = 'block';
            menu.opacity = 1;
        }
        
    }

    setEmployType(param) {
        const element = document.getElementById('input_employ_type');
        element.value = param.target.innerText;
        this.setState({type: param.target.innerText});
        document.getElementById('dropdown_menu').style.opacity = 0;
        setTimeout(() => document.getElementById('dropdown_menu').style.display = 'none' , 300);
    }

    render() {
        return (
            <div id='inputContainer'>
            <div id="btnBox">
                <button onClick={this.hideScreen} id='cancel'>x</button>
                <button onClick={this.handleSubmit} id="confirm">{'>'}</button>
            </div>
              
              <div id='inputbox'>
                <form autoComplete='off'>
                  <div id='title_source'>
                      <label>Title <input name='title' id='input_title' onChange={this.handleChange}></input></label>
                      <div></div>
                      <label>Company <input name='company' id='input_company' onChange={this.handleChange}></input></label>
                  </div>
                  <div id='small_dets'>
                      <label>Location <input name='location' id='input_location' placeholder='Where is it? Is it remote?' onChange={this.handleChange}></input></label>
                      <label>Employment Type 
                          <div id='type_dropdown'>
                              <input onClick={this.dropdown} id='input_employ_type' placeholder='Full-time? Part-time?'></input>
                              <ul id='dropdown_menu'>
                                  <li><button type='button' onClick={this.setEmployType}>Part-Time</button></li>
                                  <li><button type='button' onClick={this.setEmployType}>Full-Time</button></li>
                                  <li><button type='button' onClick={this.setEmployType}>Contract</button></li>
                              </ul>
                          </div>
                      </label>
                      <label>Pay Rate <input name='pay' onChange={this.handleChange}></input></label>
                  </div>
                  <label>Link / Source<input name='src' id='input_src' placeholder='Where did you find it? Was it thru a job board, from an email, or maybe a friend?' onChange={this.handleChange}></input></label>
                  <label className='boxInput'>Summary <textarea name='summary' id='input_summary' placeholder='A small description about the job' onChange={this.handleChange}></textarea></label>
                  <label className='boxInput'>Duties <textarea name='duties' onChange={this.handleChange}></textarea></label>
                  <label className='boxInput'>Skills <textarea name='sKills' onChange={this.handleChange}></textarea></label>
                  <label className='boxInput'>Qualifications <textarea name='qualifications' onChange={this.handleChange}></textarea></label>
                  <label className='boxInput'>Notes <textarea name='notes' onChange={this.handleChange}></textarea></label>
                </form>
              </div>
            </div>
        )
    }
}