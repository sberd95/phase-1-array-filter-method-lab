// Code your solution here
function findMatching(array, string) {
    return array.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
}

function fuzzyMatch(array, string) {
    return array.filter(function(name) {
        let x = string.length
        return name.slice(0,x) === string
    })
}

function matchName(array, string) {
    return array.filter(function(element) {return element.name === string})
}