function a() {
    c()
    console.log('I am function')

}
function s() {
    a()
    console.log("i am function s")
}
function c() {

    console.log('I am function c')

}
function p() {
    c()
    console.log("i am function p")
}

var x = 10
a()
console.log("i am global")