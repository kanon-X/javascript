var arr= [2,3,4,5,67,8,9,3]
var filteredArr = arr.filter(function(value){
    return value %2 ==0
})
console.log(filteredArr)


function myFilter(arr){
    var newArr=[]
    for(var i =0; i < arr.length; i++){
  if(arr[i] %2 == 0){
    newArr.push(arr[i])
  }
    }
    return newArr

}
console.log(myFilter(arr,function(value){
    return value %2 == 1
}))

console.log(myFilter(arr,function(value){
    return value > 4
}))
