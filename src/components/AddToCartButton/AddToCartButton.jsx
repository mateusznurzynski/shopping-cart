import { useState } from 'react'
import style from './AddToCartButton.module.css'
import PropTypes from 'prop-types'

function AddToCartButton({ addToCart, productData }) {
  const [itemQuantity, setItemQuantity] = useState(1)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addToCart(productData.id, itemQuantity)
      }}
      className={style.buttonContainer}
    >
      <input
        onChange={(e) => {
          setItemQuantity(+e.target.value)
        }}
        type='number'
        value={itemQuantity}
        className={style.counter}
      />

      <input value='Add to cart' type='submit' className={style.button} />
    </form>
  )
}

AddToCartButton.propTypes = {
  addToCart: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
}

export default AddToCartButton
