// Q. Given an integer array nums sorted in non-decreasing order, return an array of the squares of 
//each number sorted in non-decreasing order.


const arr = [-10, -5, 1, 3, 5, 7]

const squaredSortedarray = (array) => {
   let newArr = new Array(array.length).fill(0)
   let lp = 0
   let rp = array.length - 1
   let set = array.length - 1

   while(set >= 0) {
      if(array[rp]*array[rp] > array[lp]*array[lp]){
         newArr[set] = array[rp]*array[rp]
         rp--
      }else if(array[rp]*array[rp] < array[lp]*array[lp]){
         newArr[set] = array[lp]*array[lp]
         lp++
      }else{
         newArr[set] = array[lp]*array[lp]
         lp++
      }
      set--
   }

   return newArr
}

console.log(squaredSortedarray(arr));