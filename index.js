const minimum=50;
const maximum=100;
const answer=Math.floor( Math.random()*(maximum-minimum+1))+minimum;
console.log(answer);

let attempts=0;
let guess;
let running=true;
while(running ){
    guess=window.prompt(`Guess Number between ${minimum} - ${maximum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`plz Enter a valid number:`);
    }
    else if(guess < minimum || guess > maximum){
        window.alert(`plz Enter a valid number:`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low try again!`);
        }
        else if(guess > answer){
            window.alert(`Too High try again!`);
        }
        else{
            window.alert(`Correct! The answer was ${answer}.It took you ${attempts} attempts`);
            running=false;
        }
    }
   
}