// function memoize(func) {
//     const cache = {}; // Create an empty cache object  
//     return function(...args) {
//       const key = JSON.stringify(args); // Generate a unique key based on the arguments
//         if (cache[key]) {
//         return cache[key]; // Return the cached result if available
//       }
//       const result = func.apply(null, args); // Invoke the original function
//       cache[key] = result; // Cache the result for future use
//         return result; // Return the result
//     };
//   }
//   // Example function to be memoized
//   function expensiveOperation(n) {
//     console.log('Computing...');
//     return n * 2;
//   }
  
//   const memoizedOperation = memoize(expensiveOperation);
  
//   console.log(memoizedOperation(5)); // Calls the expensiveOperation and caches the result
//   console.log(memoizedOperation(5)); // Retrieves the result from the cache, avoiding recomputation
//   console.log(memoizedOperation(10)); // Calls the expensiveOperation for a different argument
//   console.log(memoizedOperation(10)); // Retrieves the result from the cache for the second argument
  

function memoizedAddTo256(){
    var cache = {};  
    return function(num){
      if(cache[num]){
        console.log("cached value");
        return cache[num]
      }
      else{
        cache[num] = num + 256;
        console.log("normal return")
        return cache[num];
      }
    }
  }
  var memoizedFunc = memoizedAddTo256();
  
  memoizedFunc(20); // Normal return
  memoizedFunc(20); // Cached return