var arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.join(','))

arr.fill(4)
console.log(arr)

var arr1 = [1,2,3]
var arr2 = arr.concat(arr1)
console.log(arr2)

var arr4 = Array.from(arr1)
console.log(arr4)