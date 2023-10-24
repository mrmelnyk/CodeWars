//create a function that takes an array with the names of people that 'like' a post and return display text that would go along with the post.
//Example:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    if(names.length == 1){
      return `${names[0]} likes this`
    } else if(names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else {
      return `no one likes this`
    }
  }

  console.log(likes([Andrew, Nikki, Reux, Remi]))//should log 'Andrew, Nikki and 2 others like this'