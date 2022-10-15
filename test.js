let str = 'reception!A28:F288';

const matches = str.match(/\d+$/)
console.log(matches[0]+1);

console.log(parseInt(str.match(/\d+$/)[0], 10)+1);