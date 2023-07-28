import React from 'react';
import '../Searchbar/Searchbar.css';

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input placeholder='Find Job Description'></input>
    }
} 