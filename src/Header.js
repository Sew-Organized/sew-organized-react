import React, { Component } from 'react';
import './App.css';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.header}</h1>
            </header>
        )
    }
}
