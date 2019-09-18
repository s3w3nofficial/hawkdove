class Food {
    constructor(x, y) {
        this.location = createVector(x, y)
        this.radius = 5
        this.color = [150, 150, 50]
        this.blobs = []
    }

    setPosition(x, y) {
        this.location.x = x
        this.location.y = y
    }

    draw() {
        fill(...this.color)
        ellipse(this.location.x, this.location.y, this.radius)
    }
}