import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from "./Transaction"

export const TransactionHistory=()=>{

    const {transactions }= useContext(GlobalContext);
    console.log(transactions)

        return(
            <div>
                <h3>Transaction Histroy</h3>
                <ul className="list">
                    <Transaction />

                </ul>
            </div>
        )

}