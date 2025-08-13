import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { requestFormReset } from 'react-dom'

 import Saudacao from './Components/Saudacao'
 import Rodape from './Components/Rodape'
  import Alerta from './Alerta'
 function App(){
  return (
    <div>teste
      <Saudacao />
      <Rodape />
      <Alerta />
    </div>
  )
 }

 export default App;