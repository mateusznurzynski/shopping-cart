import style from './ShopPage.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ShopItem from '../ShopItem/ShopItem'

function ShopPage() {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products?limit=5'

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const loadProducts = (data) => {
    setProducts(data)
    setLoading(false)
    console.log(data)
  }

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((json) => loadProducts(json))
  }, [])

  const shopItemElements = products.map((product) => {
    return <ShopItem key={product.id} productData={product} />
  })

  return loading ? (
    <div className='loading'></div>
  ) : (
    <section className={style.shopPage}>
      <div className={style.shopItemList}>{shopItemElements}</div>
    </section>
  )
}

ShopPage.propTypes = {}

export default ShopPage
