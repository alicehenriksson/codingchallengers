function textToNumberBinary(str) {
	let a = str.toLowerCase().split(" ")
    let binary = []

    for (let i = 0; i < a.length; i++) {
        if ("zero"==(a[i])) {
            binary.push(0)
        }
        if ("one"==(a[i])) {
            binary.push(1)
        }
    }

    let x = binary.length % 8
    if (x == 0) {
        return binary.join("")
    } else {
        return binary.slice(0,binary.length-x).join("")
    }
}

console.log(textToNumberBinary("zeawdawd awdwadawd one zero one one zero one zero one zero"))