/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import './App.css'
import { UserContext } from './context/UserContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './home'
import Update from './update'
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/update' element={<Update />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path='/*' element={<Navigate to={'/not-found'} replace={true} />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
