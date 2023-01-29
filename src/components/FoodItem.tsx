import { Dispatch } from "react"
import styles from "./FoodItem.module.scss"

import { FoodItemInterface } from "../Layout/FoodList"

interface FoodItemProps extends FoodItemInterface {
  addMealHandler: Dispatch<{ type: string; meal: FoodItemInterface }>
}

function FoodItem({ id, name, description, price, addMealHandler }: FoodItemProps) {
  // console.log(addMealHandler())

  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItem__description}>
        <div className={styles.foodItem__description__title}>{name}</div>
        <div className={styles.foodItem__description__dummy_text}>{description}</div>
        <div className={styles.foodItem__description__price}>${price}</div>
      </div>
      <div className={styles.foodItem__order_functionality}>
        <h5 className={styles.foodItem__order_functionality__amount}>Amount</h5>
        <input type='number' className={styles.foodItem__order_functionality__count} />
        <div className={styles.foodItem__order_functionality__button}>
          <button
            onClick={() =>
              addMealHandler({ type: "add-meal", meal: { id, name, description, price } })
            }
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
