import style from './NavbarShoppingCart.module.css'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiCartVariant } from '@mdi/js'

function NavbarShoppingCart({ numberOfItems }) {
  return (
    <button aria-label='Shopping Cart' className={style.shoppingCartWrapper}>
      <Icon path={mdiCartVariant} size={1.1} title={'Shopping Cart'} />
      <div>{numberOfItems}</div>
    </button>
  )
}

NavbarShoppingCart.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
}

// NavbarShoppingCart.defaultProps = {
//   numberOfItems: 0,
// }

export default NavbarShoppingCart
