$(function () {
    const base = 'https://deckofcardsapi.com/api/deck';

    $.getJSON(`${base}/new/draw/`).then(data => {
        let {
            suit,
            value
        } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    });
    // ------------------------------
    let firstCard = null;
    $.getJSON(`${base}/new/draw/`).then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${base}/${deckId}/draw`);
    }).then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function (card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
        });
    });

    // ------------------------------
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
    $.getJSON(`${base}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btn.show();
    });
    $btn.on('click', function () {
        $.getJSON(`${base}/${deckId}/draw/`).then(data => {
            let cardSrc = data.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append($('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            }));
            if (data.remaining === 0) $btn.remove();
        });
    });
});