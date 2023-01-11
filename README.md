## Exercises JavaScript

## Exercise 1
Given an array of objects, get the object with id 3:

`const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]`


## Exercise 2
Given an array of values, return a truthy array (no null, empty, non-numbered, undefined or dummy values)

`const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']`

## Exercise 3
Given an array of cities, get all the cities in Spain that are not capitals.

`const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]`

## Exercise 4
Given three arrays of numbers, draw into a new array the intersection of these arrays.

`const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];`

## Exercise 5
Given an array of cities, get in a new array the non-capital cities with new parameters that are city and isSpain. The value of isSpain will be a boolean indicating if it is a city in Spain.

`const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]`

## Exercise 6
Create a function that rounds a float number to a specified number of decimal places.

The function must have two parameters: 
- First parameter is a float number with x decimal places.
- Second parameter is an int indicating the number of decimal places to round to.
- Avoid using the toFixed() method.

Example:

`const roundedResult = roundTo(2.123, 2);`
`console.log(roundedResult); // 2.12`
 
`const roundedResult = roundTo(1.123456789, 6);`
`console.log(roundedResult); // 1.123457`

## Exercise 7
Create a function that returns the fields of an object that equal a "falsy" value after being executed by a specific function.
The foundation must have two parameters:
- First parameter is an object with x number of fields and values.
- Second parameter is a function that returns a boolean, which has to be applied to the object of the first parameter.

Example:

`const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')`
 
`console.log(result); // {a: 1, c: 3}`

## Exercise 8
Create a function that converts a number of bytes into a format with readable values ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB').
The function must have 2 parameters:
- First parameter must be the number of bytes.
- Second parameter must be a number specifying the number of digits to truncate the result to (this can be done with Number.prototype.toPrecision()). By default, this parameter should have a value of 3.

Example:

`const result = fromBytesToFormattedSizeUnits(1000);`
`console.log(result); // 1KB`
 
`const result = fromBytesToFormattedSizeUnits(123456789);`
`console.log(result); // 123MB`
 
`const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);`
`console.log(result); // -12.145GB`


## Exercise 9
Create a function that from an input object, returns an object making sure that the keys of the object are in lowercase.
The function must have an object as its only parameter.

`const myObject = { NamE: 'Charles', ADDress: 'Home Street' };`

## Exercise 10
Create a function that removes html or xml tags from a string.
The function must have a string as its only parameter.

Example: 

`const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');`
 
`console.log(result); // lorem ipsum`

## Exercise 11
Create a function that takes an array as a parameter and splits it into new arrays with as many elements as specified.
The function must have two parameters:
- The first parameter is the integer array to be split.
- The second parameter is the number of elements that the arrays into which the original array of the first parameter is to be divided must have.

Example: 

`const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);`
`console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]`
