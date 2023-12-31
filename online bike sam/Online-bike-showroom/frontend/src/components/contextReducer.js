import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name:action.name, qty:action.qty, color:action.colors}]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((bikes, index) => {
                if (bikes.id === action.id) {
                    console.log(bikes.qty, parseInt(action.qty), action.price + bikes.price)
                    arr[index] = { ...bikes, qty: parseInt(action.qty) + bikes.qty, price: action.price + bikes.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Error in Reducer");
}
};

export const CartProvider = ({children})=>{

const[state,dispatch] = useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);