var a = 30
var b = 20
var c = 30
var d = 40
if (a>b || c>d) {
    console.log('A is greater than B or C is greater than D')
}
else{
    console.log('At least one condition is false')
}

if (a>c && d>b) {
    console.log('a is greater than c and d is greater than b')
}
else{
    console.log('At least one condition is false')
}

var check = !(a>b)
console.log(check)