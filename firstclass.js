function add(a,b){
    return a+b
}

var sum = add
console.log(sum(3,4))
console.log(typeof sum)

var arr =[]
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))