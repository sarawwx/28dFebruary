document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'cash',
            img: 'img/cash.jpg'
        },
        {
            name: 'cash',
            img: 'img/cash.jpg'
        },
        {
            name: 'clock',
            img: 'img/clock.jpg'
        },
        {
            name: 'clock',
            img: 'img/clock.jpg'
        },
        {
            name: 'coffee',
            img: 'img/coffee.jpg'
        },
        {
            name: 'coffee',
            img: 'img/coffee.jpg'
        },
        {
            name: 'cookie',
            img: 'img/cookie.jpg'
        },
        {
            name: 'cookie',
            img: 'img/cookie.jpg'
        },
        {
            name: 'pizza',
            img: 'img/pizza.jpg'
        },
        {
            name: 'pizza',
            img: 'img/pizza.jpg'
        },
        {
            name: 'icecream',
            img: 'img/icecream.jpg'
        },
        {
            name: 'icecream',
            img: 'img/icecream.jpg'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('scr', 'img/blank.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


// flip card function
    function flipCard() {
        var cardId = this.getAttibute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('scr', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()





})