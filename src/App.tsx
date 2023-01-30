import "./App.css"
import Header from "./Layout/Header"
import Main from "./Layout/Main"
import FoodList from "./Layout/FoodList"

// Test only
import { FoodListProvider } from "./store/FoodListProvider"

function App() {
  return (
    <div className='App'>
      <FoodListProvider>
        <Header />
        <Main />
        <FoodList />
      </FoodListProvider>
    </div>
  )
}

export default App
