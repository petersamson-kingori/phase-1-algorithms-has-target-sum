function hasTargetSum(array, target) {
  // Write your algorithm here

  for (var i = 0; i < array.length; i++){
    for (var x = i + 1 ; x < array.length; x++){
      if ((array[i]+array[x]) === target){
        return true
      }else{
        return false
      }

    }

  }
}
console.log(hasTargetSum([5,5], 10))
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))
/* 
  Write the Big O time complexity of your function here
*/
//

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
//Create a variable [i] that loops through the array and a variable [x] that loops through but ahead of [i]. if their sum is === 10 return true
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
