const {
    findMean,
    findMedian,
    findMode,
} = require("./helperfunc");

describe("#findMean", function(){
    it("finds the mean of an empty array", function() {
        expect(findMean([]).toEqual(0))

    })
    it("find mean of array", function(){
        expect(findMean([1,2,3])).toEqual(2)
    })
})
describe("#findMedian", function(){
    it("finds the median of even set", function() {
        expect(findMedian([1,2,4,5])).toEqual(3)
    
    })
    it("finds the median of odd set", function (){
        expect(findMedian([1,2,3])).toEqual(2)
    })
})

describe("#mode", function(){
    it("finds the mode an array", function() {
        expect(findMode([1,1,2,3])).toEqual(1)
    })
})