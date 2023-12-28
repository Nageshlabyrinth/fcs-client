import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import VideoPage from '../VideoPage'
// import Slingir from '../Slingir'
const Home = () => {
  return (
    <>
    <Header/>
    <div>
        <VideoPage/>
        <div>
           <h1>home</h1>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home