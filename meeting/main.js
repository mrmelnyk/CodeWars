//Take the string that holds all the attendees to the meeting and return a new string with the names all uppercase, sorted in alphabetical order by last name, and in paranthesis.

function meeting(s){
  return s.toUpperCase().split(';').map(a => a.split(':').reverse().join(', ')).sort().map(b => '('+b+')').join('');
}

console.log(meeting('Andrew:Melnyk;Nikki:Gray;Reux:Lorne;Remi:Gray'))//should log '(GRAY, NIKKI)(GRAY, REMI)(LORNE, REUX)(MELNYK, ANDREW)'
