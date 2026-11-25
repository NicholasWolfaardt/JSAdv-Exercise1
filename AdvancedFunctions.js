// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number
function multiply(num1, num2, num3){
  if (num1 === num2 || num1 === num3 || num2 === num3 )
  {
    return "The numbers cannot be the same"
  } else {
    return  `The result is: ${num1 * num2 * num3}`
  }
}
console.log(multiply(4,4,8))
console.log(multiply(4,9,8))

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
const convertToSeconds = (minutes) => `${minutes} minutes is ${minutes * 60} seconds`
console.log(convertToSeconds(21));


// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(farenheight)
{
  return `${farenheight} Degrees Farenheight is ${(Math.round((farenheight - 32) / 1.8))} Degrees Celsius`
}
console.log(fahrenheitToCelsius(110));


// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
function reverseGnirts(esrever) {
  reverse = ""
  for (let i = esrever.length -1; i >= 0; i--) {
    reverse += esrever[i]
  }
  return `${esrever} -> ${reverse}`
}
console.log(reverseGnirts("Instructions"));


// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowels(sentence) {
  let counter = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a' || 
      sentence[i] === 'e' ||
      sentence[i] === 'i' ||
      sentence[i] === 'o' ||
      sentence[i] === 'u') 
      {
      counter += 1
    }
  }
  return `There are ${counter} vowels in ${sentence}`
}
console.log(countVowels("Nicholas"))