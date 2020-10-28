// Compare two arrays to find if it has common entry and return boolean.
// Considering Time Complexity and to avoid Quadratic solution (nested for loop).
// oopsss ->
//added a line
//added another line
// this is branch4
array1 = [1,2,3,4,5,6] 
array3 = [6,7,8,9,10]

function dog(){
  console.log("Meow")
}

function compareForCommon(arr1,arr2){
  let map={};
  //converting first array to object (also removes duplicate)
  for(i=0;i<arr1.length;i++){
    if(!map[arr1[i]]){
      map[arr1[i]] = true; 
    }
  }
  
  for(i=0;i<arr2.length;i++){
    if(map[arr2[i]]){
      return true;
    }
  }
  return false;
}

compareForCommon(array1,array2);

// Solution: 
// Nested for loop takes O(a * b) operations, which is not advisable.
// Converting first array to object so it returns presence of searching element instantaneously.
// O(a + b)
