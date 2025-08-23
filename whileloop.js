

var isRunning=true
while(isRunning){
    var rand = Math.floor(Math.random() * 10 +1)
    if(rand ==7){
        console.log('You got 7, you win!')
        isRunning = false
    }
    else{
        console.log('You got ' + rand + ', try again.')
    }
}