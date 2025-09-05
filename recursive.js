function sayHi(n) {
    if (n ==0){
        return
    }
        console.log('hi i am kanon')
        sayHi(n-1)
}
sayHi(4)

function sum (n) {
    if (n==1){
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(5))

function fact(n) {
    if (n == 1){
        return n * fact(n-1)
    }
    return 1
}
console.log(fact(5))