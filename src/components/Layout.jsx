import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import '../assets/styles/App.scss'


const Layout = ({ children }) => (

    <div className="App">
        <Header />
        {children}
        <Footer />
    </div>

)

export default Layout