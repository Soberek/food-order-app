import React, { useContext } from "react"
import styles from "./Header.module.scss"
import { FaShoppingCart } from "react-icons/fa"

import { FoodListContext } from "../store/FoodListProvider"
// Modal
import Modal from "../components/Modal"

function Header() {
  const ctx = useContext(FoodListContext)

  let mealsCount = 0

  for (let i = 0; i < ctx.meals.length; i++) {
    if (ctx.meals[i].amount > 0) {
      mealsCount += ctx.meals[i].amount
    }
  }

  console.log(mealsCount)

  return (
    <>
      <Modal />
      <div className={styles.header}>
        <div className={styles.header__logo}>ReactMeals</div>
        <div className={styles.header__cart}>
          <div className={styles.header__cart__title}>
            <FaShoppingCart />
            Your cart
          </div>
          <div className={styles.header__cart__product_amount}>{mealsCount}</div>
        </div>
      </div>
    </>
  )
}

export default Header
