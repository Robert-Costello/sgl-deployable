/* eslint-disable max-statements */
/* eslint-disable complexity */

//========LIFE BOARD===============

let grid
let cols
let rows
let res = 12
let s

function make2DArray(cols, rows) {
  let arr = new Array(cols)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

function setup() {
  createCanvas(600, 600)
  s = new snake()

  frameRate(10)

  cols = width / res
  rows = height / res

  grid = make2DArray(cols, rows)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (j % 2 === 0 || i % 2 !== 0) grid[i][j] = floor(random(2))
    }
  }
}

function draw() {
  background(45)

  //IF DEATH SPELL OUT 'YOU ARE DEAD' ON GRID
  s.death()

  s.update()
  s.show()

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * res
      let y = j * res

      if (grid[i][j] === 1 && s.cut(x, y)) {
        s.total = 0
        s.tail = []
        console.log('cut')

        s.update()
      }

      if (s.eat(x, y) && grid[i][j] === 1) {
        grid[i][j] = 0
        s.total++
        console.log(s.total)
      }

      if (grid[i][j] === 1) {
        fill(234, 86, 86)
        stroke(0)
        rect(x, y, res - 1, res - 1)
      }
    }
  }

  let next = make2DArray(cols, rows)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j]

      // COUNT LIVING NEIGHBORS
      let neighbors = countNeighbors(grid, i, j)

      if (state === 0 && neighbors === 3) {
        next[i][j] = 1
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0
      } else {
        next[i][j] = state
      }
    }
  }

  grid = next
}

function countNeighbors(grid, x, y) {
  let sum = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === x && y === j) continue
      if (grid[x + i] && grid[x + i][y + j]) {
        sum += grid[x + i][y + j]
      }
    }
  }

  return sum
}

function keyPressed() {
  if (keyCode === UP_ARROW && s.ySpeed !== 1) {
    s.dir(0, -1)
  }
  if (keyCode === DOWN_ARROW && s.ySpeed !== -1) {
    s.dir(0, 1)
  }
  if (keyCode === LEFT_ARROW && s.xSpeed !== 1) {
    s.dir(-1, 0)
  }
  if (keyCode === RIGHT_ARROW && s.xSpeed !== -1) {
    s.dir(1, 0)
  }
}
