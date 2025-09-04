var person = [
    {
    namr : 'A',
    age :24
},
{
    name : 'B',
    age : 25
},
{
    name : 'c',
    age : 19
},
{
    name : 'D',
    age : 32

}
]
var arr = [-1,-5,-3,7,4,8,9,2,3,1,5,6]

arr.sort()
console.log(arr)

person.sort()
console.log(person)

arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a,b){
        return -1
}else{
    return 0
}
})
console.log(arr)

person.sort(function(a,b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
    console.log(person)

    var res1 = arr.every(function(value){
        return value %2 ==0
        return value > 0
    })
    console.log(res1)
    var res2 = arr.some(function(value){
        return value >=0
    })
    console.log(res2)