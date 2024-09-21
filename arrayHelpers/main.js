/*
Extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
*/

Array.prototype.square = function() {
    return this.map(x => x*x);
  }
  
  Array.prototype.cube = function() {
    return this.map(x => x*x*x);
  }
  
  Array.prototype.average = function() {
    return this.sum()/this.length;
  }
  
  Array.prototype.sum = function() {
    return this.reduce((a,b) => a+b,0);
  }
  
  Array.prototype.even = function() {
    return this.filter(x => !(x % 2));
  }
  
  Array.prototype.odd = function (){
    return this.filter(x => x % 2);
  }