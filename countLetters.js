
// Function signature
// name: countLetters
// arguments: str a string
// return: object

// Given a string, it returns an return an object that
// can represent the stats for the sentence it is given:
// all the characters found in the input string, and their
// respective counts.
// Has no side-effects.
// returns object {[letter: <number>]}

function countLetters(str) {

  var output = {};
  var strMashed = str.toLowerCase();

  for (var i = 0; i < strMashed.length; i++) {

    var currLetter = strMashed[i];

    if (/\w/.test(currLetter)) {

      if (!output[currLetter]) {
        output[currLetter] = 0;
      }

      output[currLetter] += 1;

    }

  }

  return output;

}

// var obj1 = countLetters("hello hello!");
// console.log(obj1);

