var obj1 ={
    a:3,
    b:2
}

var obj2 ={
    a:3,
    b:2
}
if (obj1.a == obj2.a && obj1.b ==obj2.b)
{
    console.log(true)
}else{
    console.log(false)
}

console.log(obj1)
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))