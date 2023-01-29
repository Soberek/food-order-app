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
  const [meals, dispatchMeals] = useReducer(
    (
      state: FoodItemInterface[],
      action: { type: string; meal: FoodItemInterface }
    ): FoodItemInterface[] => {
      if (action.type === "add-meal") {
        if (state.find((el) => el.id === action.meal.id)) {
          console.log("Meal exist.")
          return [
            ...state.map((el) => {
              return { ...el, amount: el.amount ? el.amount++ : 0 }
            }),
          ]
        }
        return [...state, { ...action.meal, amount: 1 }]
      }

      return state
    },
    []
  )

  return (
    <div className={styles.foodList}>
      <div className={styles.foodList__container}>
        {mealsData.map((meal) => (
          <FoodItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            addMealHandler={dispatchMeals}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodList
