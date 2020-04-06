import axios from 'axios'

//const count
//const name;
//const currency;

const getPayload = () => { axios.get('https://demo9104838.mockable.io/currencies')
     .then(res => {

      const count = res.data.balance;
      const name = res.data.name;
      const currency = res.data.currency;

     })
}


export default function counter(state = 0, action) {
 switch (action.type) {
   case 'INCREMENT':
     return state + 1
   case 'DECREMENT':
     return state - 1
   default:
     return state
 }
}
