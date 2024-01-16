import PropTypes from 'prop-types'

function NavbarShoppingCart({ numberOfItems }) {
  return <div>{numberOfItems}</div>
}

NavbarShoppingCart.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
}

// NavbarShoppingCart.defaultProps = {
//   numberOfItems: 0,
// }

export default NavbarShoppingCart
