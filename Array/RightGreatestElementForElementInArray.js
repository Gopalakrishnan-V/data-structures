function getRightGreatestElements(arr){
    let currentRightMax = -1;
    let result = [];
    for(let i=arr.length-1; i>=0; i--){
        result[i] = currentRightMax;
        currentRightMax = Math.max(currentRightMax, arr[i]);
    }
    return result;
}

console.log(getRightGreatestElements([5,12, 56, 8]));