const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
const winningCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const playText = document.getElementById('playText')
const boxes = Array.from(document.getElementsByClassName('box'))

boxes.forEach((cell) => {
	cell.addEventListener('click', clickedSquares, { once: true })
})

function clickedSquares(e) {
	e.target.innerText = currentPlayer

	if (checkWin(currentPlayer)) {
		playText.innerText = `${currentPlayer} has won`
		return
	} else if (isDraw()) {
		playText.innerText = 'draw game'
		return
	} else {
		currentPlayer = currentPlayer === playerO ? playerX : playerO
	}
}

function checkWin(currentPlayer) {
	return winningCombo.some((combo) => {
		return combo.every((index) => {
			return boxes[index].innerText === currentPlayer
		})
	})
}

function isDraw() {
	return [...boxes].every((box) => {
		return box.innerText === playerO || box.innerText === playerX
	})
}
