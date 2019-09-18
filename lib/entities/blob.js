class Blob {
    constructor(x, y, color) {
        this.location = createVector(x, y)
        this.color = color
        this.radius = 10
        this.speed = 1
        this.food = 100
        this.energy = 100
    }

    setPostion(x, y) {
        this.location.x = x
        this.location.y = y
    }

    moveToLocation(t) {
        let target = createVector(t.x, t.y)
        target.sub(this.location.x, this.location.y)
        target.normalize()
        target.mult(1)
        this.location.x += target.x
        this.location.y += target.y
    }

    draw() {
        fill(this.color)
        ellipse(this.location.x, this.location.y, this.radius)
    }
}