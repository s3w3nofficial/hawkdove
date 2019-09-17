function calculatePosInPit(i, blobCount, pitRadius) {
    let angel = (360/blobCount) * i * PI / 180;
    let x = Math.cos(angel) * pitRadius + width/2
    let y = Math.sin(angel) * pitRadius + height/2
    
    return [int(x), int(y)]
}