const board = document.querySelector('#board')
const colors = [
  '#5F939A',
  '#F5A962',
  '#3C8DAD',
  '#F54748',
  '#FFBBCC',
  '#99154E',
  '#00EAD3',
  '#FFF5B7',
  '#FF449F',
  '#005F99',
  '#E93B81',
  '#FFF5FD',
  '#F54748',
  '#867AE9',
  '#C449C2',
  '#FFF5AB',
  '#FFCEAD',
]
const SQUARES_NUMBER = 1008

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
