'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
  * filter: Designed to filter values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array or Object} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function filter(collection, test) {
    let filteredArray = [];
    if (test(collection, value)) {
        filteredArray.push(value);
    }
    return filteredArray;
  }
  module.exports.filter = filter;
/**
* identity: Returns the same value that is used as the argument. In math: f(x) = x
* This function looks useless, but is used as a default iteratee.
* 
* parameter: any value
* 
* returns: Whatever value is entered as the argument. The value gets run through the function.
*/
function identity(value) {
  return value;
}
module.exports.indentity = identity;
/**
 * typeOf: Takes any value and defines the data type.
 * 
 * parameter: any value, just name one
 * 
 * returns: a string with the data type of array, object, null, not a number(NaN), boolean, etc. Maybe the datatype as 'date'.
 * This way you know now.
 */
 function typeOf(value) {
  if (Array.isArray(value)) return 'array';
  if (value === null) return 'null';
  if (value instanceof Date) return 'date';
  if (typeof value === 'object') return 'object';
  else return typeof(value);
 }
 module.exports.typeOf = typeOf;
/**
* first: Returns the first element of an array. 
* Passing the number will return that many values starting at the 
* beginning of the array.
* 
* first parameter: an array
* second parameter: a number that represents how many elements of the array to 
* return, starting at the first element
* 
* returns: the first element of an array up to the number provided.
*/
function first(array, number) {
   if (Array.isArray(array) === false || number < 1) {
       return [];
      } else if(number === undefined) {
          return array[0];
      } else {
          return array.slice(0, number);
      }
  }
  module.exports.first = first;
/**
* last: Whereas the previous function 'first()' returns the first element of an array, 
* the function 'last()' returns the last element of an array. The number determines how 
* many index values from the back to return.
* 
* first parameter: an array 
* second parameter: a number again
* 
* 
* returns: the last element of the array and the preceding elements based on the argument
*/
function last(array, number) {
   var i = array.length; 
   if (Array.isArray(array) === false || number < 1) {
       return [];
      } else if(number === undefined) {
          return array.pop();
      } else if (i < number) {
          return array;
      } else {
          return array.splice(array.length - number, number);
      }
  }
  module.exports.last = last;
/**
* indexOf: Determines whether or not a value is in an array,
* and if so, where in the array the value is based on its index. 
* 
* first parameter: an array 
* second parameter: a value
* 
* returns: Returns the index at which value can be found in the array, 
* or -1 if value is not present in the array.
*/
function indexOf(array, value) {
   for (var i = 0; i < array.length; i++) {
       if (array[i] === value) {
           return i;
          }
      } return -1;
  }
  module.exports.indexOf = indexOf;
/**
* contains: Looks to see if a value is in an array.
* 
* parameter: an array 
* parameter: a value that may or may not be in the array
* 
* returns: Returns true if the value is present in the array
*/
function contains(array, value) {
   if (array.includes(value)) {
       return true;
      } else {
          return false;
      }
  }
  module.exports.contains = contains;
/**
* unique: Produces a duplicate-free version of the array, using === to test object equality. 
* In particular only the first occurrence of each value is kept.
* 
* parameter: an array
* 
* returns: a new array with no duplicates
*/
function unique(array) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
       if (_.indexOf(array, array[i]) === i) {
           newArray.push(array[i]);
          }
      }return newArray;
  }
  module.exports.unique = unique;
/**
* reject: This is the logical inverse of the filter function.
* A function is called for each element in the array. 
* Every element that returns false gets added to the new array.
* 
* parameter: an array 
* parameter: and a function, just like filter
* 
* returns: a vast array of rejects
*/
function reject(array, test) {
   var result = [];
   each(array, function(val, i, arr) {
       if (test(val, i, arr) === false) {
           result.push(val);
          }
      });
      return result;
  }
  module.exports.reject = reject;
/**
* partition: calls a function on each value in an array
* and separates them into two different arrays based on the results of the function
* It's basically the results of filter and reject separated in a new array
* 
* first parameter: an array 
* second parameter: a function
* 
* returns: an array with a split list into two arrays: 
* one whose elements all satisfy the function, 
* and one whose elements all do not satisfy the function.
*/
function partition(array, test) {
   let array1 = [];
   let array2 = [];
   let finalArray = [array1, array2];
   each(array, function(element, key, arr) {
       if(test(element, key, arr) === !element) {
           array2.push(element);
          } else {
              array1.push(element);
          }
      });
      return finalArray;
  }
  module.exports.partition = partition;
/**
* map: produces a new array of values by mapping each value 
* in the collection through a transformation function (func). 
* In this instance, the function receives three arguments: the value, then the index 
* (or key) of the iteration, and finally a reference to the entire collection.
* 
* 
* first parameter: a collection 
* second parameter: a function
* additional parameter: additional values in the nested function
* 
* returns: a new array of the value of each element after being 
* passed through a function
*/
function map(collection, func) {
  var outputArr = [];
  if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
          var result = func(collection[i], i, collection); // <- here are those three arguments
          outputArr.push(result);
      }
  } else {
      for (var key in collection) {
          var result = func(collection[key], key, collection);
          outputArr.push(result);
      }
  }return outputArr;
}
module.exports.map = map;
/**
* pluck: A convenient version of what is perhaps the most common 
* use-case for map: extracting a list of property values.
* 
* first parameter: an array of objects 
* second parameter: a property (or object key) found within each individual object
* 
* returns: an array containing the value of a property 
* for every element in the array
*/
function pluck(array, property) {
   return map(array, function(element) {
       return element[property]
      });
  }
  module.exports.pluck = pluck;
/**
* every: calls a function on every element of a collection
* If every element comes back true, this every function 
* returns true.
* 
* first parameter: a collection, meaning an array or object
* second parameter: a function
* 
* returns: true if all of the values in the collection pass the truth test (second parameter). 
* Short-circuits and stops traversing the collection if a false element is found.
*/
function every(collection, func) {
   let answer = true;
   if (func) {
       if (Array.isArray(collection)) {
           for (var i = 0; i < collection.length; i++) {
               if (!func(collection[i], i, collection)) {
                   answer = false;
                  }
              }
          } else {
              for (let key in collection) {
                  if(!func(collection[key], key, collection)) {
                      answer = false;
                  }
              }
          }
      } else {
          if (Array.isArray(collection)) {
              for (let i = 0; i < collection.length; i++) {
                  if (!collection[i]) {
                      answer = false;
                  }
              }
          } else {
              for (let key in collection) {
                  if (!collection[key]) {
                      answer = false;
                  }
              }
          }
      }
      return answer;
  }
  module.exports.every = every;
/**
* some: basically the same process as 'every' except
* some returns true even if just some of the elements 
* pass the so-called truth test
* 
* first parameter: a collection, just like every 
* second parameter: a function that tests each element
* 
* returns: true if any of the values in the collection 
* pass the truth test (func). Short-circuits and stops 
* traversing the list if a true element is found.
*/
function some(collection, func) {
   let answer = false;
   if (func) {
       if (Array.isArray(collection)) {
           for (var i = 0; i < collection.length; i++) {
               if (func(collection[i], i, collection)) {
                   answer = true;
                  }
              }
          } else {
              for (let key in collection) {
                  if(func(collection[key], key, collection)) {
                      answer = true;
                  }
              }
          }
      } else {
          if (Array.isArray(collection)) {
              for (let i = 0; i < collection.length; i++) {
                  if (collection[i]) {answer = true;
                  }
              }
          } else {
              for (let key in collection) {
                  if (collection[key]) {
                      answer = true;
                  }
              }
          }
      }
      return answer;
  }
  module.exports.some = some;
/**
* reduce: boils down a list of values into a new, single value
* 
* first parameter: an array 
* second parameter: a function 
* third parameter: and a seed (or initial value)
* 
* returns: the final accumulated value resulting from passing
* each element through the function (func). This resulting value can be expressed
* through any number of data types.
*/
function reduce(array, func, seed) {
   if (seed === undefined) {
       seed = array[0];
       for(var i = 1; i < array.length; i++) {
           seed = func(seed, array[i], i);
          }
      } else {
          for (var i = 0; i < array.length; i++) {
              seed = func(seed, array[i], i);
          }
      }
      return seed;
  }
  module.exports.reduce = reduce;
/**
* extend: shallowly copies all of the properties in the source 
* objects (obj2) over to the destination object (obj), 
* and return the destination object. Any nested objects 
* or arrays will be copied by reference, not duplicated. 
* It's in-order, so the last source will override properties 
* of the same name in previous arguments.
* 
* parameters: two or more objects; two like-parameters
* 
* returns: an object with additional objects now included
*/
function extend(obj, ...obj2) {
   Object.assign(obj, ...obj2);
   return obj;
  }
  module.exports.extend = extend;

