
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

      if (output[currLetter] === undefined) {

          var count = 0;
          for (var j = 0; j < strMashed.length; j++) {

            if (strMashed[j] === currLetter) {
              count += 1;
            }

          }
          output[currLetter] = count;
      }
    }
  }
  return output;
}

// var obj1 = countLetters('Ii');
// console.log(obj1);

