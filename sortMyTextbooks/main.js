//Help sort all of the textbooks so that they are in order by subject. The sorting should not be case sensitive and should be able to handle symbols.

function sorter(textbooks) {
    return textbooks.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 :
                                   a.toLowerCase() < b.toLowerCase() ? -1 : 0);
  }

  console.log(sorter(['math', 'English', '$cience', 'History']))//should log ['$cience','English','History','math']
  