

var isRunning=true
while(true){
    var rand = Math.floor(Math.random() * 10 +1)
    if(rand ==7){
        console.log('You got 7, you win!')
        break
    }
    else{
        console.log('You got ' + rand + ', try again.')
    }
}