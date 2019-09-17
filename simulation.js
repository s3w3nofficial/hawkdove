class Simulation {
    constructor(numberOfFood, numberOfDoves, numberOfHawks, foodDecaySpeed = 0) {
        this.numberOfFood = numberOfFood
        this.foodDecaySpeed = foodDecaySpeed
        this.numberOfDoves = numberOfDoves
        this.numberOfHawks = numberOfHawks

        let blobs = []

        let numberOfDovesTmp = this.numberOfDoves
        let numberOfHawksTmp = this.numberOfHawks
        for (let i = 0; numberOfDovesTmp > 0 || numberOfHawksTmp > 0; i++) {
            if (numberOfDovesTmp > 0) {
                blobs.push(new Dove(...calculatePosInPit(i, this.numberOfDoves + this.numberOfHawks, height - 320)))
                numberOfDovesTmp -= 1
            }
            if (numberOfHawksTmp > 0) {
                blobs.push(new Hawk(...calculatePosInPit(i + this.numberOfDoves, this.numberOfDoves + this.numberOfHawks, height - 320)))
                numberOfHawksTmp -= 1
            }
        }

        this.population = new Population(blobs, this.numberOfFood)
    }

    init() {
        this.population.draw()
    }

    iterate() {
        background(0)
        this.population.shufflePopulation()

        for (let i = 0; i < this.population.blobs.length; i++) {
            let history = this.population.food.filter(f => f.blobs.length < 2)

            history = [...history].sort((a, b) => {
                return dist(this.population.blobs[i].location.x, this.population.blobs[i].location.y, a.location.x, a.location.y) -
                    dist(this.population.blobs[i].location.x, this.population.blobs[i].location.y, b.location.x, b.location.y)
            })

            let index = this.population.food.findIndex(f => f.location == history[0].location)
            this.population.food[index].blobs.push(this.population.blobs[i])
        }

        setInterval(() => {
            background(0)
            this.population.draw()
            stroke(255)
            for (let i = 0; i < this.population.food.length; i++) {
                for (let j = 0; j < this.population.food[i].blobs.length; j++) {
                    line(this.population.food[i].blobs[j].location.x, this.population.food[i].blobs[j].location.y,
                        this.population.food[i].location.x, this.population.food[i].location.y)
                    let index = this.population.blobs.findIndex(b => this.population.food[i].blobs[j].location == b.location)
                    this.population.blobs[index].moveToLocation(this.population.food[i].location)
                    this.population.food[i].blobs[j].location = this.population.blobs[index].location
                }
            }
            noStroke()
        }, 16)
    }
}