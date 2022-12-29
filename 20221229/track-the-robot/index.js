//Steps = (20,30,10,40)
// north + y, east + x, south - y, west - x... 0 % 4

function trackRobot(...steps) {
    let finalPos = [0,0]
    for (let i = 0; i < steps.length; i++) {
        if (i % 4 === 0) {finalPos[1] += steps[i]}
        if (i % 4 === 1) {finalPos[0] += steps[i]}
        if (i % 4 === 2) {finalPos[1] -= steps[i]}
        if (i % 4 === 3) {finalPos[0] -= steps[i]}
    }
    return finalPos
}

console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))