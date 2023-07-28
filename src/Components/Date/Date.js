/**
 *  *      + Sept. 22 to Dec. 20 for fall 🍂
 *      + Dec. 21 to Mar. 19 for winter 🌲
 *      + Mar. 20 to Jun. 21 for spring 🌼
 *      + Jun. 22 to Sept. 21 for summer 🌺
 */

import React from 'react';
import { Application } from '../Application/Application';
import '../Date/Date.css';
import moment from 'moment/moment';

export class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: '#6C3A5C'};
        this.getEmoji = this.getEmoji.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    getEmoji() {
        const month = moment().format('MM');
        const day = moment().format('DD');
        const parseM = parseInt(month);
        const parseD = parseInt(day); 
        
        let emoji = '';

        switch (parseM) {
            case 1:
                emoji = '🌲';
                break;
            case 2:
                emoji = '🌲';
                break;
            case 3:
                parseD < 20 ? emoji = '🌲' : emoji = '🌼';
                break;
            case 4:
                emoji = '🌼';
                break;
            case 5:
                emoji = '🌼';
                break;
            case 6:
                parseD < 21 ? emoji = '🌼' : emoji = '🌺';
                break;
            case 7:
                emoji = '🌺';
                break;
            case 8:
                emoji = '🌺';
                break;
            case 9:
                parseD < 22 ? emoji = '🌺' : emoji = '🍂';
                break;
            case 10:
                emoji = '🍂';
                break;
            case 11:
                emoji = '🍂';
                break;
            case 12:
                parseD < 21 ? emoji = '🍂' : emoji = '🌲';
                break;
            default:
               emoji = '💀';
               break;
        }
        
        return(emoji);
    }

    getRelative(date) {
        let relative = moment(date, 'MMMM Do YYYY').fromNow();
        if (relative.includes('hour')) {
            return 'Today';
        } else {
            return relative;
        }
    }

    setColor(new_color) {
        this.setState({ color: new_color});
    }

    componentDidMount() {
        this.setColor(this.props.color);
    }

    render() {
        
        const dateFull = moment().format('MMMM Do YYYY');
        const oldSystem = 'style={{background: `${this.props.color}`}}';
        
        return (
            <div className='date'>
                <div id='time'>
                    <h1 id='day'>{this.props.submit_time}</h1>
                    <h1>{this.getEmoji()}</h1>
                    <h1 id='relative'>{this.getRelative(this.props.current_time)}</h1>
                </div>
                <Application color={this.props.color} params={this.props.params}/>
            </div>
        )
    }
}