import React from 'react'

export class Home extends React.Component{
  render () {
        return (
         <div className='App'>
            <h1>Home</h1>
          <p>Hello {this.props.name}, {this.props.surname}, {this.props.age}, {this.props.city}</p>
    </div>
  
    )
  }
   }


   