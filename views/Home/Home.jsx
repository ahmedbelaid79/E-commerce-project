import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'


const Home = () => {
  return (
    <div>
    <div className="page-container">
    <Sidebar/>
  <div className="page-content">
    <Header/>
    <Layout/>                           
  </div>            
</div>
</div>
  )
}

export default Home