import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransactiion from './AddTransactiion'
import { GlobalProvider } from './context/GlobalState'
import Title from './Title'
export default function ExpenseTracker() {
    return (
        <GlobalProvider>
            <Title />
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransactiion />
                
            </div>
        </GlobalProvider>
    )
}
