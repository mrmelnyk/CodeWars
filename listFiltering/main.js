function filter_list(l) {
    return l.filter(a => typeof a === 'number')
  }

  console.log(filter_list([1,2,3,'4','5']))//should log 123
  console.log(filter_list(['1',2,'3',4,'5',6]))//should log 246
  