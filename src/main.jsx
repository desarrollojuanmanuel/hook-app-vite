import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
import { FocusScreen } from './components/04-useRef/FocusScreen'
import { Layaout } from './components/05-useLayaoutEffect/Layaout'
import { CallbackHook } from './components/06-memos/CallbackHook'
import { MemoHook } from './components/06-memos/MemoHook'
import { Memorizer1 } from './components/06-memos/Memorizer1'
import { Padre } from './components/07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
  //<HooksApp />
    <hr/>
    <SimpleForm/>
    <hr/>
    <CounterWithCustomHook />
    <hr/>
    <FormWithCustomHook/>
    <hr/>
    <MultipleCustomHooks/>
    <hr/>
    <FocusScreen/>
    <hr/>
    <Layaout/>
    <hr/>
    <MemoHook/>
    <hr/>
  </React.StrictMode>*/
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>
)
