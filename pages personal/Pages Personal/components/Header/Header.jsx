import React from 'react'


export class Header extends React.Component {
    render () {
          return (
         <div className='App'>
            <h2>Header</h2>
          <p>{this.props.app} {this.props.app1} , {this.props.app2}, {this.props.app3}, {this.props.app4}</p>
    </div>
  
    )
    }
   
   }