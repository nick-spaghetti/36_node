const base = 'http://numbersapi.com';

// -------------------------------------------
let favNumber = 5;
async function part1() {
    let data = await $.getJSON(`${base}/${favNumber}?json`);
    console.log(data);
}
part1();

// -------------------------------------------
const favNumbers = [7, 11, 22];
async function part2() {
    let data = await $.getJSON(`${base}/${favNumbers}?json`);
    console.log(data);
}
part2();

// -------------------------------------------
async function part3() {
    let facts = await Promise.all(Array.from({
        length: 4
    }, () => $.getJSON(`${base}/${favNumber}?json`)));
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`)
    })
}
part3();