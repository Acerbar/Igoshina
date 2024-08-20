import { useState } from 'react'
import './App.css'
import HeaderElem from './sections/header'
import MainPage from './pages/mainPage'
import AboutPage from './pages/aboutPage'
import FooterElem from './sections/footer'




function App() {

  return (
    <>
    <HeaderElem/>
    {/* <MainPage/> */}
    <AboutPage/>
    <FooterElem/>
    </>
  )
}

export default App
