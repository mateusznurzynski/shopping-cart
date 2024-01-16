import style from './ShopItem.module.css'
import PropTypes from 'prop-types'

function ShopItem({ productData }) {
  return (
    <div className={style.shopItem}>
      <div className={style.itemImage}>
        <img src={productData.image} />
      </div>
      <div className={style.productPrice}>${productData.price}</div>
      <div title={productData.title} className={style.itemTitle}>
        {productData.title}
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  productData: PropTypes.object.isRequired,
}

export default ShopItem
