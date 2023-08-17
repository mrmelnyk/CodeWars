function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
   }

   console.log(validateUsr('andrew'))//should log true
   console.log(validateUsr('JEFFERY'))//should log false