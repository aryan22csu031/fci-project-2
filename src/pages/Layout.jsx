import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
