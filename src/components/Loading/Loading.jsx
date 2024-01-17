import style from './Loading.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

function Loading({ small }) {
  const [loadingStage, setLoadingStage] = useState(0)
  const MAX_LOADING_STAGE = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStage((oldStage) => {
        if (oldStage < MAX_LOADING_STAGE) {
          return oldStage + 1
        } else {
          return 0
        }
      })
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  let output = ''

  switch (loadingStage) {
    case 0:
      output = ''
      break
    case 1:
      output = '.'
      break
    case 2:
      output = '..'
      break
    case 3:
      output = '...'
      break

    default:
      output = '...'
      break
  }

  return <div className={small ? style.small : style.loading}>{output}</div>
}

Loading.propTypes = {
  small: PropTypes.bool,
}

export default Loading
