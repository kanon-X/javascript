var a = 'abc'
if(true){
    if(true){
        var b ='I am B'
}
}
console.log(b)




var a = 'bvg'
function x(){
    var a = 90
    function y(){
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}x()

function test()
{
    function a(n){
        return n%3==0
    }
    if(a()&&b())
    {
        console.log(n + ' is divisible by both 3 and 5')
    }else{
        console.log('not a valid number')
    }
}
test(15)