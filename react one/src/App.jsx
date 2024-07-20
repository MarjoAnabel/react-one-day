import './App.css'
import { Person} from '../components/Person/PersonFuncional'
import {PersonClass} from '../components/Person/PersonClass'


function App() {
  return (
    <div className="App">
      {/* Estructura Funcional */}
      <Person name= "Maria" surname= "Gonzales" age= "30"/>
      <Person name= "Juan" surname= "Ortiz" age= "50"/>
      <Person name= "Angela" surname= "sanchez" age= "10"/>
      {/* Esctructura con Class */}
      <PersonClass name= "Mario" surname= "guti" age= "40"/>
      <PersonClass name= "Martina" surname= "robles" age= "70"/>
      <PersonClass name= "Vicky" surname= "Lu" age= "80"/>
    </div>
  )
 }

export default App
