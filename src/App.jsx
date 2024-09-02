import { useState } from 'react'
import './App.css'
import HeaderElem from './sections/header'
import MainPage from './pages/mainPage'
import AboutPage from './pages/aboutPage'
import FooterElem from './sections/footer'
import WorkFormatsPage from './pages/workformatsPage'
import ProductsSection from './pages/products'
import ProductDetails from './sections/productDetailsSection'
import ProductDetailsPage from './pages/productDetailsPage'
import ContactsPage from './pages/contactsPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <HeaderElem />
      <AppRoutes />
      <FooterElem />
    </BrowserRouter>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/Igoshina' element={<MainPage/> }/>
      <Route path='/Igoshina/about' element={<AboutPage/> }/>
      <Route path='/Igoshina/workFormats' element={<WorkFormatsPage/> }/>
      <Route path='/Igoshina/products' element={<ProductsSection/> }/>
      <Route path='/Igoshina/contacts' element={<ContactsPage/> }/>
      <Route path="*" element={<NotFoundPage />} /> {/* Handle 404 */}
    </Routes>
  );
}

function NotFoundPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Not Found</h1>
      <p>Такая страница не существует.
      </p>
      <Link to="/Igoshina/">Домой</Link>
    </div>
  );
}

export default App
