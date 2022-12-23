const sevenBoom = (numbers) => {
    if (numbers.some(a => a.toString().includes(7))) {
        return "Boom!"
    } else {
        return "there is no 7 in the array"
    }
}

console.log(sevenBoom([8,2,3,4,5,2,66,9999997]))