function findMode(arr) {
    let freqCounter = CreateFrequencyCounter(arr);

    let count =0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > Count) {
            mostFrequent = key;
            count = freqCounter[key];

        }
    }
    return +mostFrequent;
}
/**reduce the elements of array through adding each to a counter of the specific number */
function CreateFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) +1;
    })
}
/** converting string to numbers */
function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
    for(let i =0; i <numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if(Number.isNaN(valToNumber)) {
            return new Error(
                `The Value '${numsAsStrings[i]}' at index ${i} is not valid`
            );
        }
        result.push(valToNumber);
    }
    return result;

}

function findMean(nums) {
    if(nums.length ===0) return 0;
    return nums.reduce(function (arr, cur) {
        return acc + cur;
    }) / nums.length
    /** mean will be the sum of the array then all of it divided by the length of the array */
}

//sort and get middle number, then if even set find avg of 2

function findMedian(nums){
    nums.sort((a,b)=> a - b);
    let middleIndex = Math.floor(nums.length / 2)
    let median;
    //finding if the length is even or odd
    if(nums.length % 2 ===0) {
        median = (nums[middleIndex] + nums[middleIndex-1]) /2;
    } else {
        median = nums[middleIndex];
    }
    return median
    }
    //then we export our modules
    
    module.exports = {
        createFrequencyCounter,
        findMean,
        findMedian,
        findMode,
        convertAndValidateNumsArray
      };

      //note differences btw CJS and ESM files
