const base = 'http://numbersapi.com';
let favNumber = 5;
$.getJSON(`${base}/${favNumber}?json`).then(data => {
    console.log(data);
});
// ------------------------------
let favNumbers = [7, 11, 22];
$.getJSON(`${base}/${favNumbers}?json`).then(data => {
    console.log(data);
});
// ------------------------------
Promise.all(
    Array.from({
        length: 4
    }, () => {
        return $.getJSON(`${base}/${favNumbers}?json`);
    })
).then(facts => {
    facts.forEach(data => $('body').append(`<p>${data.text}</p>`))
})