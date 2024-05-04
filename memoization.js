let cache={}

function fibonacci(n) {
    if (cache[n]) {
        console.log('in cache', cache);
        return cache[n]
    }
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    return cache[n] = fibonacci(n - 2) + fibonacci(n - 1)

    
}

console.log(fibonacci(8));