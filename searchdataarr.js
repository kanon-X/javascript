var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var find = 11
for (var i = 0; i<arr.length; i++){
    if (arr[i] == find){
        console.log("Found at index " + i)
        break;
    }
}