import React from "react"
import styles from "./Main.module.scss"

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__image}>
        {/* <img src='pizza-background-image.jpg' alt='Pizza image' /> */}
      </div>
      <div className={styles.main__description}>
        <h3 className={styles.main__description__primary_title}>
          Delicious Food, Delivered To You
        </h3>
        <p className={styles.main__description__text}>
          Choose your favorite meal from our broad selection of available meals and enjoy a
          delicious lunch or dinner at home
        </p>
        <p className={styles.main__description__text}>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by
          expierenced chefs!
        </p>
      </div>
    </div>
  )
}

export default Main
