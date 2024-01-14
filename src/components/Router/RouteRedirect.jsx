import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function RouteRedirect({ route }) {
  return <Navigate to={route} />
}

RouteRedirect.propTypes = {
  route: PropTypes.string,
}

RouteRedirect.defaultProps = {
  route: '/',
}

export default RouteRedirect
