import { useState } from 'react'
import './App.css'
import Navbar from './component /navbar'
import NutritionTable from './component /nutritiontable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className='division'>
        <h1 className='heading'>
          The Delightful World of Chocolate
        </h1>
        <div className='cardset'>
        <div className='cards'>
            <h2 className='hello'>
               Why We Love Chocolate
            </h2>
            <p className='para'>
               Chocolate is one of the most beloved treats around the globe, known for its rich taste, creamy texture, and ability to bring joy with every bite.
            </p>
        </div>

        <div className='cards'>
             <h2 className='hello'>
                A Little History
             </h2>
             <p className='para'>
                Originating from the ancient civilizations of Mesoamerica, chocolate was once considered a sacred drink, reserved for royalty and rituals.
             </p>
        </div>

        <div className='cards'>
              <h2 className='hello'>
                 Fun Fact
              </h2>
              <p className='para'>
                  Dark chocolate contains antioxidants and can even improve heart health when consumed in moderation!
              </p>
        </div>
        </div>
        <NutritionTable/>
      </div>
    </>
  )
}

export default App
