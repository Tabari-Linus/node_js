// 1. what floor does santa end up on
// ( -->> should go UP a floor
// ) -->> should go DOWN a floor

const fs = require('fs');
const question1 = ()=>{
    fs.readFile('./santa_input.txt', (errorHappening, data)=>{
        if(errorHappening){
            console.log(errorHappening)
        }
        const directions = data.toString();
        const arrayOfDirections = directions.split('')
        const floor = arrayOfDirections.reduce((acc, currentDirection)=>{
            if(currentDirection === '('){
               return acc +=1;
            }
            else{
               return acc -=1;
            }
        }, 0)
        console.log('Floor:', floor)
    })
}


question1()

// 2. When santa does first enter the basement

function question2(){
    fs.readFile('./santa_input.txt', (errorHappening, data)=>{
        if(errorHappening){
            console.log(errorHappening)
        }
        const directions = data.toString();
        const arrayOfDirections = directions.split('')
        let accumulator = 0
        let counter = 0
        const answer = arrayOfDirections.some((currentItem)=>{
            if(currentItem === '('){
               accumulator +=1;
            }
            else{
               accumulator -=1;
            }
            counter ++
            return accumulator < 0;
        })
        console.log('Times to go to basement:', counter)
    })
}

question2()