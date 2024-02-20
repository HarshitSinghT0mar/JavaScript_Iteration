//Filter and Map People Data: Create a program that takes an array of people objects with name and age properties. Use filter to create a new array of people who are older than a specified age and then use map to create an array containing only their names.

const people = [
  { name: "Rohan", age: "26" },
  { name: "Rohit", age: "20" },
  { name: "Raunak", age: "18" },
  { name: "Harsh", age: "23" },
  { name: "Yash", age: "19" },
]

const aboveTwenty=people.filter((user)=>user.age>20).map((user)=>user.name)
console.log(aboveTwenty);