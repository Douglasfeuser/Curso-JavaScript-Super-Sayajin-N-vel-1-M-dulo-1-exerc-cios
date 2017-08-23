const inverse = (x) => x * -1

const add = (y) => (x) => x + y
const subtract = (y) => (x) => add(inverse (y) )(x)

const divide = (y) => (x) => {

    let result = y
    let cont = 0

    const sub = subtract(x)

   	while (result > 0) {
        result = sub(result)
        cont++
    }

    return cont
}

console.log('12 / 6 =', divide(12)(6))
console.log('24 / 2 =', divide(24)(2))
