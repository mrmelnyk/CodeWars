//given a number of human years determine how old your dog and cat are according to that year.
//cat years: 15 cat years for the first year, +9 for the second, and +4 for every year after that.
//dog years: 15 dog years for the firts year, +9 for the second, and +5 for every year after that.
//return the solution as an array of [humanYears, catYears, dogYears]

function dogCatHuman(human){
  let cat = 0;
  if (human == 1){
    cat = 15;
  }else if(human == 2){
    cat = 24;
  }else {
    cat = (human-2)*4+24;
  }
  
  let dog = 0;
  if (human == 1){
    dog = 15;
  }else if(human == 2){
    dog = 24;
  }else {
    dog = (human-2)*5+24;
  }
  return [human, cat, dog];
}

console.log(dogCatHuman(10))//should log [10, 56, 64]
