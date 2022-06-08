document.addEventListener('DOMContentLoaded', () => {
    const wordCount = 10
    let guessCount = 4;
    let password = '';

    const start = document.getElementById('start');
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const wordList = document.getElementById('word-list');
    const guessCounter = document.getElementById('guesses-remaining')
    const winner = document.getElementById('winner')
    const loser = document.getElementById('loser')

    start.addEventListener('click', () => {
        toggleClasses(startScreen, "hide", "show")
        toggleClasses(gameScreen, "hide", "show")
        startGame()
    })

    const toggleClasses = (element, ...classes) => {
        classes.forEach(className => {
            element.classList.toggle(className)
        });
    }

    const startGame = () => {
        let randomWords = getRandomValues(words, wordCount);
        randomWords.forEach(word => {
            let li = document.createElement('li');
            li.innerText = word;
            wordList.appendChild(li)
        });

        password = getRandomValues(randomWords, 1)[0];
        setGuessCount(guessCount);

        wordList.addEventListener('click', updateGame)
    }

    const getRandomValues = (arr, numVals) => {
        return shuffle(arr).slice(0, numVals)
    }

    const shuffle = arr => {
        let arrCopy = arr.slice() //Prevent mutating orig value
        for (let idx = arrCopy.length - 1; idx > 0; idx--) {
            const randomIdx = Math.floor(Math.random() * idx);
            [arrCopy[idx], arrCopy[randomIdx]] = [arrCopy[randomIdx], arrCopy[idx]]
        }
        return arrCopy;
    }

    const setGuessCount = (newCount) => {
        guessCount = newCount
        guessCounter.innerText = `Guesses remaining: ${guessCount}.`
    }

    const updateGame = (e) => {
        if (e.target.tagName === "LI" && !e.target.classList.contains('disabled')) {
            let guess = e.target.innerText;
            let similarityScore = compareWords(guess, password)
            e.target.classList.add('disabled')
            e.target.innerText = `${guess} --> Matching Letters: ${similarityScore}`
            setGuessCount(guessCount - 1)

            if (similarityScore === password.length) {
                toggleClasses(winner, 'hide', 'show');
                wordList.removeEventListener('click', updateGame)
            } else if (guessCount === 0) {
                toggleClasses(loser, 'hide', 'show')
                wordList.removeEventListener('click', updateGame)
            }
        }
    }

    const compareWords = (word1, word2) => {
        if (word1.length !== word2.length)
            throw "Words must have same length"
        let count = 0
        for (let i = 0; i < word1.length; i++) {
            const letter = word1[i];
            if (letter === word2[i])
                count++
        }
        return count
    }
})
