import { createContext, useReducer } from "react"

// ======================================================================================
// FoodList Context Provider
// ======================================================================================

import mealsData from "../dummy_data"

export interface IFoodItemInterface {
  id: string
  name: string
  description: string
  price: number
  amount: number
}

interface IFoodList {
  meals: IFoodItemInterface[]
  handleMealsChange: ({}: handleMealsChangeType) => void
}

interface IFoodListProviderProps {
  children: React.ReactNode
}

export type handleMealsChangeType = { type: string; meal: { id: string; addValue: number } }

const defaultFoodList: IFoodList = {
  meals: [],
  handleMealsChange: () => {},
}

// Context
export const FoodListContext = createContext(defaultFoodList)

export const FoodListProvider = ({ children }: IFoodListProviderProps) => {
  // Reducer
  const [meals, dispatchMeals] = useReducer(foodListReducer, [
    ...mealsData.map((meal) => {
      return { ...meal, amount: 0 }
    }),
  ])

  function handleMealsChange({ type, meal }: handleMealsChangeType) {
    dispatchMeals({ type, meal })
  }

  return (
    <FoodListContext.Provider value={{ meals, handleMealsChange }}>
      {children}
    </FoodListContext.Provider>
  )
}

function foodListReducer(
  state: IFoodItemInterface[],
  action: handleMealsChangeType
): IFoodItemInterface[] {
  // Adding meal

  switch (action.type) {
    case "add-meal":
      return [
        ...state.map((el) => {
          if (el.id === action.meal.id) {
            return {
              ...el,
              amount: el.amount ? el.amount + action.meal.addValue : action.meal.addValue,
            }
          } else {
            return el
          }
        }),
      ]

    case "remove-meal":
      return [
        ...state.map((el) => {
          if (el.id === action.meal.id) {
            return {
              ...el,
              amount: el.amount > 0 ? el.amount - action.meal.addValue : el.amount,
            }
          } else {
            return el
          }
        }),
      ]
    default:
      throw new Error("You shouldn't be here...")
  }
}
