import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './ta-te-ti.jsx'
import { Header } from './header.jsx'
import { Aside } from './aside.jsx'
import './index.css'
import {juegos} from './assets/juegos.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Aside juegos={juegos}/>
    <Board />
  </React.StrictMode>,
)
