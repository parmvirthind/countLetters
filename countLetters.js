
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

var obj1 = countLetters('Ii');

console.log(obj1);

