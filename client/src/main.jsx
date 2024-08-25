import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateNetflix from './CriarNetflix'
import ReadNetflix from './ListarNetflix'
import UpdateNetflix from './AlterarNetflix'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/netflix/cadastrar" element={ <CreateNetflix/> }/>
                  <Route path="/netflix" element={ <ReadNetflix/> }/>
                  <Route path="/netflix/alterar" element={ <UpdateNetflix/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



