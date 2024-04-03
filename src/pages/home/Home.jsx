import React from 'react'
import Header from '../shared/Header'
import Navbar from '../shared/Navbar'
import LeftSideNAvbar from '../shared/LeftSideNAvbar'
import RightSideNavbar from '../shared/RightSideNavbar'

const Home = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     Home
     <div className='grid md:grid-cols-4 gap-6'>
          <div><LeftSideNAvbar/></div>
          <div className='md:col-span-2'>middle</div>
          <div><RightSideNavbar/></div>
     </div>
    </div>
  )
}

export default Home