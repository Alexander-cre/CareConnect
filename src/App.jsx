import React from 'react'
import { Routes, Route } from 'react-router-dom'  // Import Routes and Route
import Home from './home'
import Shop from './pages/shop'
import Footer from './components/footer'  // From your previous conversion
import Menu from './components/nav'  
import Blog from './pages/blog'
import ArticlePage from './pages/article'
import FamilyDoc from './pages/familydoc'
import ErrorPage from './pages/404'
import AboutUs from './pages/aboutus'

function App() {
  return (
    <div className="">  {/* From your footer layout */}
      {/* Optional: Add a Navbar here for top links */}
      <Menu className='absolute'/>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page at root URL */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/find-a-doc" element={<FamilyDoc />} />
        {/* Add a catch-all for 404 if needed */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* Footer at the bottom of every page */}
      <Footer />
    </div>
  )
}

export default App;