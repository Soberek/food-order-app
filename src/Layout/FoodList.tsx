import { useContext, useReducer } from "react"
import styles from "./FoodList.module.scss"
import FoodItem from "../components/FoodItem"

import { FoodListContext } from "../store/FoodListProvider"

function FoodList() {
  const ctx = useContext(FoodListContext)

  return (
    <div className={styles.foodList}>
      <div className={styles.foodList__container}>
        {ctx.meals.map((meal) => (
          <FoodItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            handleMealsChange={ctx.handleMealsChange}
            amount={meal.amount}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodList
