import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, redirect, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import MailBoxList from './Pages/MailBoxList'
import MailBoxDetails from './Pages/MailBoxDetails'
import MailBoxForm from './Pages/MailBoxForm'
import PageNotFound from './Pages/PageNotFound'

function App() {
  
  let [mailBoxes, setMailBoxes] = useState([
  ])

  let [formData, setFormData] = useState({
      _id: 0,
      boxOwner: '',
      boxSize: '',
  })



  function addBox() {
    const newBox = {
      _id: mailBoxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize,
    }

    setMailBoxes([...mailBoxes, newBox])
    setFormData({
      boxOwner: '',
      boxSize: '',
    })

    redirect('/mailboxes')
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    addBox()
  }
  
  function handleChange(event) {
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  return (
    <>
    <BrowserRouter>
        <Navbar />

      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailBoxList mailBoxes={mailBoxes} /> } />
        <Route path='/mailboxes/:id' element={<MailBoxDetails /> } />
        <Route path='/new-mailbox' element={<MailBoxForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} /> } />
        <Route path='*' element={<PageNotFound /> } />
      </Routes>

    </BrowserRouter>     
    </>
  )
}

export default App
