import './App.css'
import {Home} from '../components/Home/Home'
import {Header} from '../components/Header/Header'

function App() {

  return (
    <div className='App'>
      <Home name='mi nombre es Marjorie Anabel' surname= 'Gonzaga Ortega' age='26' />
      <Header app= 'Las tecnologias que se utlizar:' app1='JS' app2='HTML' app3='CSS'/>
    </div>


   
  )
}

export default App
