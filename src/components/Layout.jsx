import React from 'react'
import Footer from './Footer'
import Header from './Header'
const Layout = () => {
  return (
    <div>
      <div className='header'>
        <Header />
        </div>
       <div className='footer'><Footer/></div>
       
    </div>
  
  )
}

export default Layout