let simulation;

function setup() {
    createCanvas(800, 600)
    background(0)

    simulation = new Simulation(50, 50, 50)
    simulation.init()
    simulation.iterate()
    delete simulation
}