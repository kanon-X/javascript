var n =10
var str = ''

if(n % 2 ==0){
    str = 'EVEN'
}
else{
    str = 'ODD'
}
console.log(str) // Output: EVEN

// Ternary operator version
var result = n%2 ==0 ? 'EVEN ' : 'ODD'
console.log(result) // Output: EVEN