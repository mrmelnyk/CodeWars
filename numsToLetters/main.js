//Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order:
//a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

function switcher(x){
    let alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item => alpha[item]).join('');
    }

    console.log(switcher(['24','12','23','22']))//should log 'code'
    