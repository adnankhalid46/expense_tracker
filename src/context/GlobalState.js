import React, {createContext,useReducer} from 'react'
//Import the Reducer
import AppReducer from './AppReducer'

//Create the initial state
const initialState={
    transaction: [
        {id: 1, desscrition: "Income 1", transactionAmount: 1000},
        {id: 1, desscrition: "Expense 1", transactionAmount: -100},
        {id: 1, desscrition: "Income 2", transactionAmount: 2000},
        {id: 1, desscrition: "Expense 2", transactionAmount: -500}
    ]
}

//Create the Global Context
export const GlobalContext= createContext(initialState);

//Create a Provider for the Global Context
export const GlobalProvider =({children}) =>{
    
    const [state]=useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
            transactions: StaticRange.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}