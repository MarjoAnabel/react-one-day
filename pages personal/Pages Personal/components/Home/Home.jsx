import React from 'react'

export const Home = (props) => {
    return (
         <div className='App'>
            <h1>Home</h1>
          <p>Hello {props.name}, {props.surname}, {props.age}</p>
    </div>
  
    )
   
   }


   