//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    // TODO: complete
    return url.split('#')[0]
  }

  console.log(removeUrlAnchor('www.andrew.com?about=0#home'))//should log 'www.andrew.com?about=0'