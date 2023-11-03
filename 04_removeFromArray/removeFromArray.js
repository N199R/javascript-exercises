const removeFromArray = function(array, num) {
    for(let i = 0; i<array.length;i++){
        if(array[i]==num){
           cutedArray= array.splice(i,i);
            return cutedArray;
        }
         removedArray=removedArray+array[i];
         return removedArray;

    }

};

// Do not edit below this line
module.exports = removeFromArray;
