import React from 'react'
 //Estructura funcional

  export const Person = (props) => {
    return (
      <div className='App'>
        <h1>Estructura funcional</h1>
        <span>Nombre: {props.name} Apellido: {props.surname} edad: {props.age}</span>
      </div>
    )
  }
  
