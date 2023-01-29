import { Dispatch, useState } from "react"
import styles from "./FoodItem.module.scss"

import { FoodItemInterface } from "../Layout/FoodList"

interface FoodItemProps extends FoodItemInterface {
  addMealHandler: Dispatch<{ type: string; meal: { id: string; addValue: number } }>
}

function FoodItem({ id, name, description, price, amount, addMealHandler }: FoodItemProps) {
  // console.log(addMealHandler())

  const [mealAmountCounter, setMealAmountCounter] = useState(1)

  function handleMealAmountInput(e: React.FormEvent<HTMLInputElement>): void {
    const value = parseInt(e.currentTarget.value)
    if (value > 0) {
      setMealAmountCounter(value)
    }
  }

  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItem__description}>
        <div className={styles.foodItem__description__title}>{name}</div>
        <div className={styles.foodItem__description__dummy_text}>{description}</div>
        <div className={styles.foodItem__description__price}>${price}</div>
      </div>
      <div className={styles.foodItem__order_functionality}>
        <h5 className={styles.foodItem__order_functionality__amount}>Amount</h5>
        <input
          type='number'
          className={styles.foodItem__order_functionality__count}
          value={mealAmountCounter}
          onChange={handleMealAmountInput}
        />
        <div className={styles.foodItem__order_functionality__button}>
          <button
            onClick={() =>
              addMealHandler({
                type: "add-meal",
                meal: { id, addValue: mealAmountCounter },
              })
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
