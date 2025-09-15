function test(){
    var msg = 'I am learning Lexical scope'

    function sayMsg(){
        console.log(msg)
    }
    sayMsg()
}
test()

function test1(){
    var msg1 = 'I am learning Lexical scope'

   return function(){
        console.log(msg1)
    }
}
var sayMsg1 = test1()
sayMsg1()

