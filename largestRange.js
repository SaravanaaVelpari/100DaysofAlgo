//from algo expert
//given an array - find the largest range and return 

const input = [1,2,67,68,3,4,61,5]  // [0,1,2,3,4,5,6,7,10,11,12,15]
function largestRange(array){
  array.sort(function(a, b){return a - b});
  let max_range=[];
  let max_length=0;
  let range=[], length=0;
  for(let i=0;i<array.length;i++){
    if(array[i+1]==array[i]+1){
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
  console.log(max_range);
  console.log(max_length)
}

largestRange(input);