//Write a program that takes an object representing expenses, where the keys are expense categories (e.g., "food," "rent") and the values are amounts spent in each category. Calculate the total sum of expenses.

expenses = {
    "food": 200,
    "rent": 1000,
    "utilities": 150,
    "transportation": 100,
    "entertainment": 500
}


const totalExpense = (obj) => {
    const res = Object.values(obj).reduce((total, curr) => curr + total, 0)
    return res
}

console.log(totalExpense(expenses));