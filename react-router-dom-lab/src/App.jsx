import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import MailBoxList from './Pages/MailBoxList'
import MailBoxDetails from './Pages/MailBoxDetails'
import MailBoxForm from './Pages/MailBoxForm'
import PageNotFound from './Pages/PageNotFound'

function App() {
  
  return (
    <>
    <Navbar />

    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MailBoxList /> } />
        <Route path='/new' element={<MailBoxForm /> } />
        <Route path='/details' element={<MailBoxDetails /> } />
        <Route path='*' element={<PageNotFound /> } />
      
      </Routes>
    </BrowserRouter>     
    </>
  )
}

export default App
