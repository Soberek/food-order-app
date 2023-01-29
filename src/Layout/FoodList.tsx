import { useReducer } from "react"
import styles from "./FoodList.module.scss"
import FoodItem from "../components/FoodItem"

import mealsData from "../dummy_data"

export interface FoodItemInterface {
  id: string
  name: string
  description: string
  price: number
  amount?: number
}

function FoodList() {
  const [meals, dispatchMeals] = useReducer(foodListReducer, [
    ...mealsData.map((meal) => {
      return { ...meal, amount: 0 }
    }),
  ])

  return (
    <div className={styles.foodList}>
      <div className={styles.foodList__container}>
        {meals.map((meal) => (
          <FoodItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            addMealHandler={dispatchMeals}
            amount={meal.amount}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodList

function foodListReducer(
  state: FoodItemInterface[],
  action: { type: string; meal: { id: string; addValue: number } }
): FoodItemInterface[] {
  // Adding meal

  if (action.type === "add-meal") {
    return [
      ...state.map((el) => {
        if (el.id === action.meal.id) {
          console.log(action.meal.addValue, el.id)
          return {
            ...el,
            amount: el.amount ? el.amount + action.meal.addValue : action.meal.addValue,
          }
        } else {
          return el
        }
      }),
    ]
  }

  return state
}
