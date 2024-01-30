
 // 1) Print odd numbers in array

// IIFE

(function(array){
     for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                   console.log(array[i])
                } 
           }
     })([10,3,5,7,2,4]) 

    
//  anonymous 

    let anonsfunc = function(numbers){
        for(var i = 0 ; i< numbers.length ; i++){
              if(numbers[i]%2!=0){
                 console.log(numbers[i])
              } 
         }
      };
      let a = [1,3,5,76,8,11];
      anonsfunc(a);

// arrow function

let Odd_Num = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         };

Odd_Num([23,5,7,9,2]);     
         

// 2) Convert all the strings to title caps in a string array  

// IIFE

(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return console.log(str.join(' '));
    
  })("Tamilselvan RAMASAMY");


  //Arrow Function 
  
    titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return console.log(str.join(' '));
  } 

titleCase("tamilselvan ramasamy");


//anonymous 

let  titlecase2 =function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return console.log(str.join(' '));

}
titlecase2("Hi hello wElcome");

// 3) Sum of all numbers in an array

//IIFE

(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return console.log(sum);
    })([1,2,3,4])


//anonymous  

let sumArr = function(array){
        var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         return console.log(sum);
      }
sumArr([1,2,3,4]);

// Arrow     

sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return console.log(sum);
          }
sum([1,2,3,4]);


// 4)Return all the prime numbers in an array
   
//Anonymous 
        let PrimeNum  = function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
     PrimeNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);  
  // IIFE 
          (function(numArray){
             numArray = numArray.filter((number) => {
                 for (var i = 2; i <= Math.sqrt(number); i++) {
                   if (number % i === 0) return false;
                     }
                      return true;
                     });
                  console.log(numArray);
                  })([1,2,3,4]);
// Arrow Function 
    
     let  primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
                  
         primeNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);



// 5) Remove duplicates from an Array

//Anonymous Function 

let anonmsfunc = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  anonmsfunc([1,1,2,3,4,7,8,9,9,9]);

//IIFE 
   (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4,7,8,9,9,9]);

