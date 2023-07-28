import React from 'react';
import moment from 'moment';
import { Date } from '../Date/Date';

export class AppList extends React.Component {
    constructor(props) {
        super(props);
        //bindings
        this.conversion = this.conversion.bind(this);
    }

    conversion() {
        const apps = this.props.apps;
        console.log(apps);
    }

    render() {
        const currentDate = moment().format('MMMM Do YYYY');
        let apps = this.props.apps;
        // console.log(apps);

        return (
            <div>
                <Date current_time={currentDate} submit_time={currentDate} color={'#1a1a1a'} params={apps[0]}/>
                {
                    this.conversion()
                }
            </div>
        );
    }
}