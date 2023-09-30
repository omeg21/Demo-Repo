import './AppClass.css';
import React, { Component } from 'react'


export default class AppClass extends Component{

    render() {
        return (
            <h1 className='h1-blue'>{this.props.msg} </h1>
        );
    }
}