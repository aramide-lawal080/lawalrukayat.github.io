const isPrime=number=>{
    if (number % 2===0 && number !==2) {
        console.log(`${number} is not prime`)

    }else if(number %3===0 && number !==3){
        console.log(`${number} is not prime`)
        
    }else if (number %5===0 && number !==5) {
        console.log(`${number} is not prime`)
        
    }else if (number %7===0 && number !==7) {
        console.log(`${number} is not prime`)
        
    }else{
        console.log(`${number} is prime`)
    }
}
isPrime(11)