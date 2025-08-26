var obj = {
    x : 30,
    y : 40,
    z : 50
}
console.group(Object.keys(obj))
console.group(Object.values(obj))
console.group(Object.entries(obj))

//advance method

var obj2 = Object.assign({},obj)
obj2.x = 100
console.log(obj)
console.log(obj2)
