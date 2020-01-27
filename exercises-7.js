const husbandAge = prompt("how old are you?")
const wifeAge = prompt("How old are you?")

function sumAge(a,b) {
    return Number(a)+ Number(b)
}

alert(sumAge(husbandAge,wifeAge))


// You have to use the number function or else javascript will append the numbers and not add them since they are text data 