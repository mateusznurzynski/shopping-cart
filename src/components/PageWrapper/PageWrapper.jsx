import style from './PageWrapper.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function PageWrapper() {
  return (
    <div className={style.pageWrapper}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default PageWrapper
