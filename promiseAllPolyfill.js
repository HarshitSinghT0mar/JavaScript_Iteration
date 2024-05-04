const promise1= Promise.resolve(1)
const promise2=Promise.resolve(2)
const promise3=Promise.resolve(3)
function promiseAll(promiseList) {
    return new Promise((resolve, reject) => {
        let output=[]
        promiseList.forEach((element ,index)=> {
            try {
                element.then((data) => {
                    output.push(data)
                    if (index === promiseList.length - 1) {
                        resolve(output)
                    }
                })
               
            
            } catch (error) {
                reject(error)
            }
        });
    })
}
const res=promiseAll([promise1,promise2,promise3])
res.then((data) => {
    console.log(data);
})

// console.log(([promise1,promise2,promise3]));