import style from './MainButton.module.css'
import PropTypes from 'prop-types'

function MainButton({ content }) {
  return <button className={style.mainButton}>{content}</button>
}

MainButton.propTypes = {
  content: PropTypes.node.isRequired,
}

export default MainButton
