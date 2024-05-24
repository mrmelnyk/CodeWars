//Write a function that returns the number of arguments it received.

function args_count() {
    return arguments.length;
  }

  console.log(args_count('a','b','c'))//should log 3
  