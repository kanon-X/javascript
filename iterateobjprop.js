var obj = {
    x : 34,
    y : 54
}
console.log('x' in obj )
console.log('p' in obj )

for(var i in obj){
    console.log(i)
    console.log(i + ':' + obj[i])
}