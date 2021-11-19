const {readFileSync , writeFileSync} = require('fs');
// read file
const read = readFileSync('../FileResource/file_1.txt','utf-8');
console.log(read);
// create a file and write a file 
const write = writeFileSync('../FileResource/result.txt','I am Ho Tuan Phat',{
    flag: 'a'
});