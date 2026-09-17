// Function using a loop
function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

// Function using Array functions
function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  return list1.flatMap((element, index) => [element, list2[index]]);
}

// Test the functions
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));