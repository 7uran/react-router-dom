import React from 'react';
import Layout from './featured/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
const App = () => {
  return (


    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Routes></Layout>
    </BrowserRouter>

  )
}

export default App