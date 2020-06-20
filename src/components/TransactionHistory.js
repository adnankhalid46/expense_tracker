import React from 'react';

export const TransactionHistory=()=>{
        return(
            <div>
                <h3>Transaction Histroy</h3>
                <ul className="list">
                    <li className="plus">
                        Project 1 Income
                        <span>$1000</span>
                        <button classNae="delete-btn">X</button>
                    </li>
                    <li className="minus"></li>
                        Project 1 Salaries
                        <span>$500</span>
                        <button classNae="delete-btn">X</button>
                </ul>
            </div>
        )

}