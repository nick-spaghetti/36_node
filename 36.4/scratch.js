function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

module.exports = {
    add: add,
    sub: sub
}




// const annoyingGreet = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log('hello from node');
//     }
// }
// annoyingGreet();


// process.on('exit', function (code) {
//     console.log(`exiting with code: ${code}`)
// })

// const argv = process.argv;
// for (let i = 0; i < argv.length; i += 1) {
//     console.log(i, argv[i]);
// };

// setInterval(() => {
//     console.log('hello')
// }, 1000)

// setInterval(() => {
//     process.exit(1)
// }, 6000)