import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div class="bln">
                Your Balance is <span class="paisa">₹{incomeAmt - expenseAmt}</span>
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Income
                <span className="income-amount">₹{incomeAmt}</span>
                Expense
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails