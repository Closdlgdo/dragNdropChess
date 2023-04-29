const piece = document.querySelectorAll('.chess-piece')

const squares = document.querySelectorAll('.square')

const infoDisplay = document.querySelectorAll('#info')

king.addEventListener('drag', dragging)
king.addEventListener('dragstart', dragStart)

queen.addEventListener('drag', dragging)
queen.addEventListener('dragstart', dragStart)

pawn.addEventListener('drag', dragging)
pawn.addEventListener('dragstart', dragStart)

rook.addEventListener('drag', dragging)
rook.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop),
    square.addEventListener('dragend', dragEnd)
})

let beingDragged 

function dragging() {
    infoDisplay.textContent = 'You are dragging a ' + beingDragged.id
}

function dragStart(e) {
    beingDragged = e.target
    console.log(beingDragged)
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.target.classList.add('highlight')
}

function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
    console.log(e.target)
}

function dragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'), 100)
    infoDisplay.textContent = 'You have dropped a ' + beingDragged.id
}

console.log(squares)
//if there was more than one piece we would use querySelectorAll. 