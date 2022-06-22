// This is a simple program that takes a string and returns a string with the characters replaced by their corresponding numbers in the alphabet.
const map = require('./map');

function tokenize(data) {
    if (typeof data !== 'string') {
        throw new Error('The input must be a string!');
    }

    return data.split('').map(character => map[character]).join('$');
}

function detokenize(data) {
    if (typeof data !== 'string') {
        throw new Error('The input must be a string!');
    }
    return data.split('$').map(character => Object.keys(map).find(key => map[key] === parseInt(character))).join('');
}

console.log(tokenize('demo'))
console.log(detokenize('4$5$13$15'))