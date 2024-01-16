import ShoppingImage from '../../assets/shopping.svg'
import MainButton from '../MainButton/MainButton'
import style from './MainPage.module.css'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className={style.mainPage}>
      <section className={style.mainPageText}>
        <h1>Find what you need!</h1>
        <p>
          Check out our high-quality products. <br /> Lorem ipsum dolor sit
          amet?
        </p>
        <Link to={'/shop'}>
          <MainButton content={'Our Products'} />
        </Link>
      </section>
      <img className={style.mainPageImage} src={ShoppingImage}></img>
    </div>
  )
}

export default MainPage
