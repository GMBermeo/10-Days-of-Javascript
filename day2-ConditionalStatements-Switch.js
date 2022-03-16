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

function getLetter(s) {
    let letter;
    const vowels = ["a", "e", "i", "o" ,"u"];
    const case1 = ["b","c","d","f","g"];
    const case2 = ["h","j","k","l","m"];
    const case3 = ["n","p","q","r","s","t","v","w","x","y","z"];
    // Write your code here
    switch(true){
    case vowels.includes(s.charAt(0)):
        return "A";
        break;
    case case1.includes(s.charAt(0)):
        return "B";
        break;
    case case2.includes(s.charAt(0)):
        return "C";
        break;
    case case3.includes(s.charAt(0)):
        return "D";
        break;
    } 
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}