import React from 'react'
import axios from 'axios'

const Counter = ({ value, onIncrement, onDecrement, setBalance }) => {

  React.useEffect(() => {

    axios.get('https://demo9104838.mockable.io/currencies')
         .then(res => {
           setBalance(res.data.balance)
         })

  }, [])

  return (
    <p>
      Clicked: {value} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </p>
  )
};
export default Counter
