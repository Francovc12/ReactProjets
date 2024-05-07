import React from 'react'
import ReactDOM from 'react-dom'
//import Boton1 from './boton1'
import { Article} from './article'
import './index.css'

const appDomElement = document.getElementById('root')

const root = ReactDOM.createRoot(appDomElement)

//root.render(<React.Fragment>hola mundo<br></br><Boton1 text="hola"/></React.Fragment>)

root.render(<Article/>)