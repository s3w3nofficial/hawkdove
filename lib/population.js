class Population {
    constructor(blobs, food) {
        this.blobs = blobs
        this.food = []
        for (let i = 0; i < food; i++) {
            this.food.push(new Food(...calculatePosInPit(i, food, random(0, height-320-20))))
        }
    }

    shufflePopulation() {
        shuffle(this.blobs, true)
        for (let i = 0; i < this.blobs.length; i++)
            this.blobs[i].location = createVector(...calculatePosInPit(i, this.blobs.length, height-320))
    }

    draw() {
        // Draw blobs
        for(let i = 0; i < this.blobs.length; i++) {
            this.blobs[i].draw()
        }

        // Draw food
        for(let i = 0; i < this.food.length; i++) {
            this.food[i].draw()
        }
    }
}