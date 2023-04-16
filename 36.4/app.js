// const scratch = require('./scratch');
const fs = require('fs');
// fs.readFile('posdem.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log('error', error);
//         process.kill(1)
//     }
//     console.log(data)
// })

// const line = '\nand eternity in an hour';

// fs.writeFile('poem.txt', line, {
//     encoding: 'utf8',
//     flag: 'a'
// }, (error) => {
//     if (error) {
//         console.log('error', error);
//         process.kill(1)
//     }
//     console.log('it worked');
// })

fs.appendFile('poem.txt', '\nappend me', 'utf8', (error) => {
    if (error) {
        console.log('error', error);
        process.kill(1)
    }
    console.log('it worked');
})