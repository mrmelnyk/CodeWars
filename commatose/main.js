//Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. 
//You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!
//Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. 
//The returned string should not end with a comma or any trailing whitespace.

function dadFilter(str){
      return str.replace(/,(?=,)|,\s*$/g, '')
    }

    console.log(dadFilter('i think,,,, therefore i am,,, '))//should log 'i think, therefore i am'
    console.log(dadFilter('Hello,,,, World!,'))//should log 'Hello, World!'
    