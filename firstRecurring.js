//google interview question
//find the first recurring item in array with best time/space complexity solution
//Conventional nested for loop takes O(n^2) - not advisable

input = [1,2,3,4,5,6,6,4,5]

function firstrecurring(array){
    let mapp = {};
    for(let i=0;i<array.length;i++){
      if(mapp[array[i]]){
        return array[i]      //returns first duplicate at instance
      }
      else{
        mapp[array[i]]=true; //adds an key/value to object
      }
    }
    return "no recurring";
  }
  
firstrecurring(input)

  
  //time complexity O(n)
  //space complexity O(1)


  //Note: different answers will come on the nested & hash outputs for [2,5,5,2]
  //if 2 needs to be the answer, then we need to go for nested for loop :)