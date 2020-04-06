
export default function counter(state, action) {
 switch (action.type) {
   case 'SETBALANCE':
    return action.balance
   case 'INCREMENT':
     return state + 1
   case 'DECREMENT':
     return state - 1
   default:
     return state
 }

}
