$(function () {
    const base = 'https://deckofcardsapi.com/api/deck';

    // ------------------------------------------
    async function part1() {
        let data = await $.getJSON(`${base}/new/draw/`);
        let {
            suit,
            value
        } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    }
    part1();

    // ------------------------------------------
    async function part2() {
        let firstCardData = await $.getJSON(`${base}/new/draw/`);
        let deckId = firstCardData.deck_id;
        let secondCardData = await $.getJSON(`${base}/${deckId}/draw`);
        [firstCardData, secondCardData].forEach(card => {
            let {
                suit,
                value
            } = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
        });
    }
    part2();

    // ------------------------------------------
    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${base}/new/shuffle/`);
        $btn.show().on('click', async function () {
            let cardData = await $.getJSON(`${base}/${deckData.deck_id}/draw/`);
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append($('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            }));
            if (cardData.remaining === 0) $btn.remove();
        })
    }
    setup();
});