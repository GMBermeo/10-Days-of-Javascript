'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
const vowels = ["a", "e", "i", "o", "u"];
let part1 = [];
let part2 = [];
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i = 0; i < s.length; i++) {
    if(vowels.includes(s[i])){
        part1.push(s[i]);
        } else{
            part2.push(s[i]);
            }
    }
    part1.forEach(element => console.log(element));
    part2.forEach(element => console.log(element));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}