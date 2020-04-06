import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core';


const Counter = ({ value, onIncrement, onDecrement, setBalance }) => {

  React.useEffect(() => {

    axios.get('https://demo9104838.mockable.io/currencies')
         .then(res => {
           setBalance(res.data.balance)
         })

  }, [])

  return (
    <p>
      £ {value} 
      <Button variant="contained" color="primary" size="small" onClick={onIncrement}>+</Button>
      <Button variant="contained" color="secundary" size="small" onClick={onDecrement}>-</Button>
    </p>
  )
};
export default Counter
