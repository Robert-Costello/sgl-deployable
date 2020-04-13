/* eslint-disable no-undef */
//========SNAKE BOARD===============

function snake() {
  this.x = 0
  this.y = 0
  this.xSpeed = 1
  this.ySpeed = 0
  this.total = 0
  this.tail = []

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i]

      let d = dist(this.x, this.y, pos.x, pos.y)
      if (d < 1) {
        this.total = 0
        this.tail = []
        console.log('death')

        this.x = 0
        this.y = 0
        this.xSpeed = 0
        this.ySpeed = 0
        this.total = 0
        this.tail = []

        for (let k = 0; k < cols; k++) {
          for (let j = 0; j < rows; j++) {
            grid[k][j] = 0
          }
        }
        grid[10][14] = grid[10][15] = grid[11][16] = grid[12][16] = grid[13][16] = grid[12][17] = grid[12][18] = grid[14][15] = grid[14][14] = grid[17][14] = grid[18][14] = grid[21][14] = grid[24][14] = grid[29][14] = grid[30][14] = grid[33][14] = grid[34][14] = grid[35][14] = grid[38][14] = grid[39][14] = grid[40][14] = grid[41][14] = grid[16][15] = grid[19][15] = grid[21][15] = grid[24][15] = grid[28][15] = grid[31][15] = grid[33][15] = grid[36][15] = grid[38][15] = grid[16][16] = grid[19][16] = grid[21][16] = grid[28][16] = grid[29][16] = grid[30][16] = grid[31][16] = grid[33][16] = grid[34][16] = grid[35][16] = grid[38][16] = grid[39][16] = grid[40][16] = grid[17][18] = grid[18][18] = grid[16][17] = grid[16][21] = grid[21][17] = grid[24][17] = grid[28][17] = grid[31][17] = grid[33][17] = grid[35][17] = grid[38][17] = grid[22][18] = grid[23][18] = grid[28][18] = grid[31][18] = grid[33][18] = grid[36][18] = grid[38][18] = grid[39][18] = grid[40][18] = grid[41][18] = grid[19][17] = grid[24][16] = grid[15][21] = grid[17][21] = grid[20][21] = grid[21][21] = grid[22][21] = grid[23][21] = grid[26][21] = grid[27][21] = grid[30][21] = grid[31][21] = grid[32][21] = grid[36][21] = grid[15][22] = grid[18][22] = grid[20][22] = grid[25][22] = grid[28][22] = grid[30][22] = grid[33][22] = grid[36][22] = grid[15][23] = grid[18][23] = grid[20][23] = grid[21][23] = grid[22][23] = grid[25][23] = grid[26][23] = grid[27][23] = grid[28][23] = grid[30][23] = grid[33][23] = grid[36][23] = grid[15][24] = grid[18][24] = grid[20][24] = grid[25][24] = grid[28][24] = grid[30][24] = grid[33][24] = grid[15][25] = grid[16][25] = grid[17][25] = grid[20][25] = grid[21][25] = grid[22][25] = grid[23][25] = grid[25][25] = grid[28][25] = grid[30][25] = grid[31][25] = grid[32][25] = grid[36][25] = 1

        noLoop()

        setTimeout(() => {
          loop()
        }, 2000)

        setTimeout(() => {
          setup()
        }, 5000)
      }
    }
  }

  this.cut = function (lifeX, lifeY) {
    for (let k = 0; k < this.tail.length; k++) {
      let pos = this.tail[k]
      let d = dist(pos.x, pos.y, lifeX, lifeY)

      if (d < 1) {
        return true
      } else {
        return false
      }
    }
  }

  this.update = function () {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y)

    this.x = this.x + this.xSpeed * res
    this.y = this.y + this.ySpeed * res

    this.x = constrain(this.x, 0, width - res)
    this.y = constrain(this.y, 0, height - res)
  }

  this.show = function () {
    fill(77, 195, 15)
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, res - 1, res - 1)
    }
    rect(this.x, this.y, res - 1, res - 1)
  }

  this.dir = function (x, y) {
    this.xSpeed = x
    this.ySpeed = y
  }

  this.eat = function (lifeX, lifeY) {
    let d = dist(this.x, this.y, lifeX, lifeY)
    if (d < 1) {
      return true
    } else {
      return false
    }
  }
}
