import React from 'react'

const IncomeExpenses = ({balance, expenses}) => {
    const income = balance - expenses
    const incomeStyle = {
        color : income <0 ? 'red' : 'green'
    }
  return (
    <div className='ie-div'>
      <div className='income-div'>
        <h4>Income rem</h4>
        <p style={incomeStyle} >{balance}/-</p>
      </div>
      <div className='expenses-div'>
        <h4>Expenses</h4>
        <p>-{expenses}/-</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
