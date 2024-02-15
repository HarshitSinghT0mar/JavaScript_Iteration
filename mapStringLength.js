const mapStringLength=(arrOfStr)=>{
const output=[]
  arrOfStr.map((str)=>{
     return output.push(str.length)
    })

    return output
}

console.log(mapStringLength(['hi', 'hello', 'okk']));