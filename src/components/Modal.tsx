import { useContext } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.scss"

import { FaPlus, FaMinus } from "react-icons/fa"

import { FoodListContext } from "../store/FoodListProvider"

interface IModal {
  handleClose: () => void
  modalState: boolean
}

function Modal({ handleClose, modalState }: IModal) {
  const ctx = useContext(FoodListContext)

  let cartSum = 0

  for (let i = 0; i < ctx.meals.length; i++) {
    if (ctx.meals[i].amount > 0) {
      cartSum += ctx.meals[i].price * ctx.meals[i].amount
    }
  }

  let roundedCartSum = (Math.round(cartSum * 100) / 100).toFixed(2)

  return (
    <>
      {createPortal(
        <div className={`${styles.modal}`}>
          {/* <div className={styles.modal__overlay}>Hello</div> */}
          <div className={`${styles.modal__foodList} ${modalState ? styles.show : styles.hide}`}>
            {/* <ModalFoodItem />
            <ModalFoodItem /> */}

            {ctx.meals.map((meal) => {
              if (meal.amount > 0) {
                return <ModalFoodItem key={meal.id} {...meal} />
              }
            })}

            <div className={styles.totalAmount}>
              <div className={styles.totalAmount__total}>
                <div className={styles.totalAmount__total__title}>Total Amount</div>
                <div className={styles.totalAmount__total__endPrice}>${roundedCartSum} </div>
              </div>

              <div className={styles.totalAmount__buttons}>
                <button onClick={handleClose} className={styles.totalAmount__buttons__close}>
                  Close
                </button>
                <button className={styles.totalAmount__buttons__order}>Order</button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("portal-root")!
      )}
    </>
  )
}

export default Modal

import { IFoodItemInterface } from "../store/FoodListProvider"

const ModalFoodItem = ({
  id,
  name,
  description,
  price,
  amount,
}: IFoodItemInterface): JSX.Element => {
  const ctx = useContext(FoodListContext)
  let totalAmount = (Math.round(amount * price * 100) / 100).toFixed(2)
  return (
    <div className={styles.modal__foodList__foodItem}>
      <div className={styles.leftSide}>
        <div className={styles.leftSide__name}>{name}</div>
        <div className={styles.leftSide__price}>${totalAmount} </div>
        <input className={styles.leftSide__amount} value={`x ${amount}`} disabled />
      </div>
      <div className={styles.rightSide}>
        <button
          onClick={() => ctx.handleMealsChange({ type: "add-meal", meal: { id: id, addValue: 1 } })}
          className={styles.rightSide__increment}
        >
          <FaPlus />
        </button>
        <button
          onClick={() =>
            ctx.handleMealsChange({ type: "remove-meal", meal: { id: id, addValue: 1 } })
          }
          className={styles.rightSide__decrement}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  )
}
