//An array is monotonic if it is either monotone increasing or monotone decreasing.

//An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone 
//decreasing if for all i <= j, nums[i] >= nums[j].

//Given an integer array nums, return true if the given array is monotonic, or false otherwise.


const array = [1,3,2]

const isMonotonic = (nums) => {
   let index = 0

   if(nums.length === 0 || nums.length === 1) {
      return true
   }

   if(nums[0] < nums[nums.length - 1]){
      while(index < nums.length - 1){
         if(nums[index] > nums[index+1]){
            return false
         }else{
            index ++ ;
         }
      }
   }else if(nums[0] > nums[nums.length - 1]){
      while(index < nums.length - 1){
         if(nums[index] < nums[index+1]){
            return false
         }else{
            index ++ ;
         }
      }
   }else{
      while(index < nums.length - 1){
         if(nums[index] !== nums[index+1]){
            return false
         }else{
            index ++ ;
         }
      }
   }
   return true
}

console.log(isMonotonic(array))