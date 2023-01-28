import React from "react"
import styles from "./Header.module.scss"
import { FaShoppingCart } from "react-icons/fa"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>ReactMeals</div>
      <div className={styles.header__cart}>
        <div className={styles.header__cart__title}>
          <FaShoppingCart />
          Your cart
        </div>
        <div className={styles.header__cart__product_amount}>2</div>
      </div>
    </div>
  )
}

export default Header
