//Santa needs to make sure that no one else is using his sleigh right before the holidays. Finish the method that will check if the username and password are correct whenever someone tries to start the sleigh.

function Sleigh(){
  this.name = 'Santa Claus';
  this.password = 'Ho Ho Ho!';
}

Sleigh.prototype.authenticate = function(name, password){
  return name === this.name && password === this.password;
}

