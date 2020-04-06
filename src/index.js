import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'


import Counter from './components/Counter'
import reducer from './reducers'



const store = createStore(
  reducer
)

const changeAction = type => store.dispatch({ type })
const setAction = (type, balance) => store.dispatch({type, balance})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      setBalance={(balance) => setAction('SETBALANCE', balance)}
      onIncrement={() => changeAction('INCREMENT')}
      onDecrement={() => changeAction('DECREMENT')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
