// Class component

import React, { Component } from 'react'

export class PersonClass extends React.Component{
  render() {
    return (
        <div className='App'>
            <h2>Esctrucura con Class</h2>
    <span>PersonClass: {this.props.name} Apellido: {this.props.surname} Age: {this.props.age}</span>

        </div>
    ) 
  }
}

