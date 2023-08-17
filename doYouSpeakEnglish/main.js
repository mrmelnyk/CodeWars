function spEng(sentence){
      let sub = 'english';
       return sentence.toLowerCase().includes(sub)
    }

    //tests
    console.log(spEng('qwertyenGLISHzxcvn'))//should return true
    console.log(spEng('EGnlishhaha'))//should return false