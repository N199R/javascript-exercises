const reverseString = function(string) {
       wordSplited = string.split("");
       wordReversed =wordSplited.reverse();
       wordJoined=wordReversed.join("");
       return wordJoined;
};

// Do not edit below this line
module.exports = reverseString;
