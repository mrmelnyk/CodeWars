/*Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
    A "word" is a sequence of alphabetical characters. 
    By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").*/

    function abbreviate(str) {
        return str.replace(/\w{4,}/g, function(a){
          return a[0] + (a.length -2) + a.slice(-1);
        });
      }

      console.log(abbreviate('internationalization'))//should log 'i18n'
      