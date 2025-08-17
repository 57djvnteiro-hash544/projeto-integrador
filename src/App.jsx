import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { requestFormReset } from 'react-dom'

 import Saudacao from './Components/Saudacao/Saudacao.jsx'
 import Rodape from './Components/Rodape/Rodape.jsx'
 import Alerta from './Components/Alerta/Alerta.jsx'
 import CPFField from './Components/Email/CPFField.jsx'
 import LoginButton from './Components/Button/Button.jsx'
 import PasswordField from './Components/Password/PasswordField.jsx'
 function App(){
  return (
    <div> Olá Daniel
      <Saudacao />
      <Rodape />
      <Alerta />
      <CPFField />
      <PasswordField />
      <LoginButton />
    </div>
  )
 }

 export default App;
 
