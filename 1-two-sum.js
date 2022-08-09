/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers.indexOf(numbers[i]), numbers.lastIndexOf(numbers[j])];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 5, 5], 7));
