import styles from "./FoodList.module.scss"
import FoodItem from "../components/FoodItem"
function FoodList() {
  return (
    <div className={styles.foodList}>
      <div className={styles.foodList__container}>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    </div>
  )
}

export default FoodList
