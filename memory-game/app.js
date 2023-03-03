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
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ( cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'img/white.jpg')
            cards[optionTwoId].setAttribute('src', 'img/white.jpg')
            cardsWon.push(cardsChosen)
            } else {
                cards[optionOneId].setAttribute('src', 'img/blank.jpg')
                cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
                alert('sorry, try again')
            }
    }

// flip card function
    function flipCard() {
        var cardId = this.getAttibute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()





})