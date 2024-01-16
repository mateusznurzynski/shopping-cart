import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import NavbarShoppingCart from '../NavbarShoppingCart/NavbarShoppingCart'

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link to={'/'}>Logo</Link>
      </div>
      <div className={style.navbarLink}>
        <Link to={'/'}>Home</Link>
      </div>
      <div className={style.navbarLink}>
        <Link to={'/shop'}>Shop</Link>
      </div>
      <div className={style.navbarLastItem}>
        <Link to={'/shopping-cart'}>
          <NavbarShoppingCart numberOfItems={0} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
