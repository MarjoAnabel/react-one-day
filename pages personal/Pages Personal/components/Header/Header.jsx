import React from 'react'

export const Header = (props) => {
    return (
         <div className='App'>
            <h2>Header</h2>
          <p>{props.app} { props.app1} , {props.app2}, {props.app3}, {props.app4}</p>
    </div>
  
    )
   
   }