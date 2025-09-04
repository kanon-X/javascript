function greet(msg){
    function greetings(name){
 return msg +','+name+ '!'
    }
    return greetings
}

var gm = greet('good morning')
var gn = greet('good night')
var gg = gm('kanon')
console.log(gg)
console.log(gn('ssss'))


function base(b){
    function power(n){
        var result = 1
        for (var i = 0 ; i<n ; i++){
            result *= b
        }
        return result
    }
    return power
}
var base10 = base(10)
console.log(base10(2))
