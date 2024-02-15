const filterEvenNumbers=(nums)=>{
const evenNums=nums.filter((num)=>{
    return num%2===0
})
return evenNums
}

console.log(filterEvenNumbers([1,2,3,4,5,3,4,8,6]));