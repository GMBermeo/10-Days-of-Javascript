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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let sorted =[];
    for (let i =0;i < nums.length;i++){
        if(!sorted.includes(nums[i]) && nums[i] != null){
            sorted.push(nums[i]);
            //console.log(nums[i])
            
        }
    }
    sorted.sort(function (a, b) {  return a - b;  });
    return sorted[sorted.length - 2]
    //console.log("Console -1: "+sorted[sorted.length-2])
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}