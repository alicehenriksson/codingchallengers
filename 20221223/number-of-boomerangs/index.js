// [1,6,1,5,4,5,2,4,2] = 2 boomerangs [1,6,1] [5,4,5] not [2,2,2]

function countBoomerangs(arr) {
    let numOfBoomerangs = 0
	for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length-2) {
            if (arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
                numOfBoomerangs += 1
            } 
        }
    }
    return numOfBoomerangs
}

console.log(`Number of boomrangs: ${countBoomerangs([1,6,1,5,4,5,2,4,2,1,-20,1,0,1])}`)