let num = 1;

while(num < 101){
    if(num % 3 == 0){
        console.log("Fizz");
    }
    else if(num % 5 ==0){
        console.log("Buzz");
    }
    else if( num % 5 == 0 && num%3 == 0){
        console.log("FizzBuzz");
    }
    else{
        console.log(num);
    }
    num += 1;
}