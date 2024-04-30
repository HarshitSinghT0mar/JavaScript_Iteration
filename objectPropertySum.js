// Object Property Sum: Write a program that takes an object representing expenses, where the keys are expense categories (e.g., "food," "rent") and the values are amounts spent in each category. Calculate the total sum of expenses.

const expense = {
  food: 3000,
  rent: 15000,
  travel: 4000,
  internet: 3000,
  gym: 4000,
};


const totalSum=(expense)=>{
let sum=Object.values(expense).reduce((acc,curr)=>(acc+curr), 0)
return sum
}

