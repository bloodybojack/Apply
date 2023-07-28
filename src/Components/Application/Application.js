import React from 'react';
import '../Application/Application2.css';
import { type } from '@testing-library/user-event/dist/type';

export class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    setup(params) {
    }

    render() {
        // inherited parameters from the <Input/>
        const prop_params = this.props.params;

        // psuedo state for all parameters
        let params = {
            title: '???',
            src: 'Unknown',
            type: 'Unknown Employment Type',
            company: 'Company?',
            location: '???',
            duration: '???',
            pay: '???',
            summary: '',
            duties: [],
            skills: [],
            qualifications: [],
            notes: []
        };

        // variables to be swapped out at all will for the application
        let title = <h1>{params.title}</h1>
        let src = <p>Source: {params.src}</p>
        let type = params.type;
        let company = params.company;
        let location = params.location;
        let duration = params.duration;
        let pay = params.pay;
        let summary = params.summary;
        let duties = params.duties;
        let skills = params.skills;
        let qualifications = params.qualifications
        let notes = params.notes;

        // function to assign all inherited parameters to our psuedo state
        if(prop_params.title !== 'default object') {
            // Goes through each key in the object
            for (let [key, value] of Object.entries(prop_params)) {
                switch (key) {
                    case 'title':
                        if(value !== '') {
                            title = <h1>{value}</h1>
                        }
                        break;
                    case 'src':
                        if(value !== '') {
                            src = <p>Source: {key}</p>
                        }
                        break;
                    case 'type':
                        if(value !== '') {
                            type = <p>{'▲' + value}</p>
                        }
                        break;
                    case 'company':
                        console.log(value);
                        break;
                    case 'location':

                        console.log(value);
                        break;
                    case 'duration':
                        console.log(value);
                        break;
                    case 'pay':
                        console.log(value);
                        break;
                    case 'summary':
                        console.log(value);
                        break;
                    case 'duties':
                        console.log(value);
                        break;
                    case 'skills':
                        console.log(value);
                        break;
                    case 'qualifications':
                        console.log(value);
                        break;
                    case 'notes':
                        console.log(value);
                        break;
                    default:
                        console.log(`idk wtf ${key} is`);
                        break;
                }
            }
        }

        // put this in <div>#quickdets and section h3s to return changing background colors 
        const oldSystem = 'style={{background: `${this.props.color}`}}';

        return (
            <div id="application">
                <header>
                    <div id='title_edit'>
                        {title}
                        <button id='settingsBtn'>⚙</button>
                    </div>
                    <div id='quick_dets'>
                        {location}
                        {type}
                        {pay}
                    </div>
                    <p>{company}</p>
                    {src}
                    <h3 id='summary'>{summary}</h3>
                </header>
                <section>
                    <div  class=''>
                        <h3>Duties</h3>
                        <ul>{duties.map((duty, index) => { return <li key={index}>{duty}</li>})}</ul>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul>{skills.map((skill, index) => { return <li key={index}>{skill}</li>})}</ul>
                    </div>
                    <div>
                        <h3>Qualifications</h3>
                        <ul>{qualifications.map((qualification, index) => { return <li key={index}>{qualification}</li>})}</ul>
                    </div>
                    <div>
                        <h3>Notes</h3>
                        <ul>{notes.map((note, index) => { return <li key={index}>{note}</li>})}</ul>
                    </div>
                </section>
            </div>
        )
    }
}