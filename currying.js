function add(a,b,c){
    return a+b+c;
}
function currying(a){
    return function(b){
        return function(c){
            return add(a,b,c);
        }   
}
}

var result = currying(5)(3)(8)
console.log(result)