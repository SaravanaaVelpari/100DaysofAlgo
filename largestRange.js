//from algo expert
//given an array - find the largest range and return 
const input = [1,2,67,68,3,4,61,5]  // [0,1,2,3,4,5,6,7,10,11,12,15]


//Method 01 - conventional
function largestRange(array){
    array.sort(function(a, b){return a - b});
    console.log(array);
    let max_range=[];
    let max_length=0;
    let range=[], length=0;
    for(let i=0;i<array.length;i++){
      if(array[i+1]==array[i]+1 || array[i+1]==array[i]-1 || array[i+1]==array[i]){
        range.push(array[i]);
        length++;
      }
      else{
        range.push(array[i]);
        length++;
        if(length>max_length){
          max_range = range;
          max_length = length;
          length=0;range=[];
        }
        else{
          length=0;range=[];
        }
  
      }
    }
    return [max_range[0],max_range[max_length-1]];
  }
largestRange(input);

//Note: Best way is to construct a hash table(object) to store one by one, removing duplicate as well
//for example [1,1,1,3,4] --> this should return [3,4]

//Method 02 - using Object - best approach
//O(n) time | O(n) space
function largestRange(array){
    let bestRange = []; 
    let longestLength = 0; 
    const nums = {}; 
    for(const num of array){ 
      nums[num] = true; 
      } 
    for(const num of array){ 
      if (!nums[num]) continue;
      nums[num] = false; 
      let currentLength = 1; 
      let left = num - 1; 
      let right = num + 1; 
      while (left in nums){
        nums[left] = false;
        currentLength++;
        left--;
      } 
      while (right in nums){
        nums[right] = false;
        currentLength++;
        right++;
      }
      if (currentLength > longestLength){
        longestLength = currentLength;
        bestRange = [left + 1, right - 1]; 
      } 
    } 
    return bestRange; 
  }
largestRange(input);