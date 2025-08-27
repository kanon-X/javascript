function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

var n =10

function changes(){
    n = 100
}
changes()
console.log(n)

var point = {
    x : 45,
    y : 30

}
function printpoint(point){
    point.x =34
    point.y = 43
    console.log(point)
}
printpoint(point)