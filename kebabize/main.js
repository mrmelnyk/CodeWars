/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
*/

function kebabize(str) {
    return str[0].toLowerCase() + str.slice(1, str.length)
      .replace(/[0-9]/, '')
      .replace(/[A-Z]/g, x => `-${x.toLowerCase()}`);
}

console.log(kebabize('thisIsATest'))//should log 'this-is-a-test'

