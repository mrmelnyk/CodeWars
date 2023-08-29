function greet(name) {
    let rply = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${rply}!`
 }

 console.log(greet('andrew'))//should log 'Hello Andrew!'
 console.log(greet('NIKKI'))//should log 'Hello Nikki!'
 console.log(greet('ReUx'))//should log 'Hello Reux!'
 console.log(greet('rEMi'))//lshould log 'Hello Remi!'