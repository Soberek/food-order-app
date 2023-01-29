import styles from "./FoodItem.module.scss"

function FoodItem() {
  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItem__description}>
        <div className={styles.foodItem__description__title}>Sushi</div>
        <div className={styles.foodItem__description__dummy_text}>Fines fish and veggies</div>
        <div className={styles.foodItem__description__price}>$22.99</div>
      </div>
      <div className={styles.foodItem__order_functionality}>
        <h5 className={styles.foodItem__order_functionality__amount}>Amount</h5>
        <input className={styles.foodItem__order_functionality__count} value={5} />
        <div className={styles.foodItem__order_functionality__button}>
          <button>+ Add</button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
