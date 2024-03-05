//Given a string 's', split the string into different sized parts. The size of the parts is 'n'.

function splitInParts(s, n){
    const chunks = [];
      while (s.length > 0) {
          chunks.push(s.substring(0, n));
          s = s.substring(n, s.length);
      }
      return chunks.join(' ')
  }

  console.log(splitInParts('aabbccdd',2))//should log 'aa bb cc dd'
  