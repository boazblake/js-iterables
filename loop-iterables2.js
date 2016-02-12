/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


function sumOfArray(input){
	var total = 0;
	for (var i =0; i < input.length; i++) {
		total = total + input[i];
	} 	return total
} 



console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.


function maxOfArray(arrayInput){
	
	var maxNumber = arrayInput[0]

	for(var i = 0; i < arrayInput.length; i++) {
		if (typeof arrayInput[i] !== "number") {
			return NaN
		}
		if (arrayInput[i] > maxNumber) {
			maxNumber = arrayInput[i];

		} 
	}
	
	return maxNumber;

};


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){ 
  if (typeof symbol !== 'string') {
  	return false
  }

  var vowel = ['a','e','i','o','u']

  var newSymbol = symbol.toLowerCase()

  return vowel.indexOf(newSymbol) !== -1

} 

console.assert(isVowel(0) === false);
console.assert(isVowel([]) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


function reverse(oldString) {
	var newString = ""
	for (var i = oldString.length - 1; i >= 0; i--) {
		var letter = oldString[i]
		newString = newString + letter;
	}return newString;
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

 function fizzbuzz(input) {
	
	var outputs = ""

    for (var i = 1; i <= input; i++) {
		
        if (i % 3 !== 0 && i % 5 !== 0) {
		
			 outputs = outputs + '.'
		
		}

		if (i % 3 === 0 && i % 5 !== 0) {
			
		 	outputs =  outputs +  "fizz"
		
		}
		if (i % 5 === 0 && i % 3 !== 0) {
			
		 	outputs =  outputs + "buzz" 
		}

		if (i % 3 === 0 && i % 5 === 0) {
			
		 	outputs = outputs + "fizzbuzz"

		} 
    }
	return outputs
    }
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

//    var alphabet = "qwertyuiopasdfghjklzxcvbnm  " 
   
//     var old = sentence.split('')


// var noPunct = function(phrase) {
	
// 	if (phrase  !== alphabet) {	
// 	} return alphabet
// }

//     var longWord = ''
//     for (var i = 0; i < old.length; i++) {
//     	var word = old[i]
//     	if (longWord.length < word.length) {
//     		longWord = word
//     	}
//     }
//     return longWord
// }




// var findLongestWord() = function(sentence) {


// 	function = seperator(sentence){
// 		function splitString(sentence) {
// 			var oldSentance = sentence.split(' ');
// 				for (var i = 0; i < alphabet.length; i++) {
// 					var alphabet = "qwertyuiopasdfghjklzxcvbnm  "
// 					if (oldSentence.indexOf([i]) === -1) {
// 						function splitString(sentence){
// 							var oldSentanceAfterPunc = sentence.oldSentence.split(indexOf([i]);
// 								for (var i = 0; i < oldSentanceAfterPunc.length; i++) {
// 								if (oldSentanceAfterPunc.indexOf([i]).length < )
// }
// 				}	

// 			}
// 		}
// 	}
// }


var alphabet = "1234567890qwertyuiopasdfghjklzxcvbnm "

var contains = function (sequence, element) {
	if (sequence.indexOf('element') === -1) {
		return false
	} else {
		return true
	}
}


function stripPunct(inputString) {
	var newString = " ";
	for (var i = 0; i < inputString.length; i++) {
		var char = inputString[i];
		if (contains(alpha,char)){
			newString += char
		}
	}
	return newString;
}

function findLongestWord(sentence) {
	if ()
}




console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

