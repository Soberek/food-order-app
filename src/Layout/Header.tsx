import React from "react"
import styles from "./Header.module.scss"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>ReactMeals</div>
      <div className={styles.header__cart}>
        <div className={styles.cart__title}>Your cart</div>
        <div className='cart__product-amount'>2</div>
      </div>
    </div>
  )
}

export default Header
