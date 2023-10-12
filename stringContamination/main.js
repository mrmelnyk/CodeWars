//Replace everyrhing within a string with the given character. If either text or character is empty, replace with an empty string.
//The character is a string with a length of one or an empty string.

function contamination(text, char) {
  return text.replace(/./g, `${char}`);
}

console.log(contamination('abc', 'z'))//should log 'zzz'
