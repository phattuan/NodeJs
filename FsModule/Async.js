const {readFile, writeFile} = require('fs');
readFile('../FileResource/file_1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
})
writeFile('../FileResource/result.txt', 'HO TUAN PHAT',(err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
})