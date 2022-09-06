import { expect, it, test } from "vitest"
import { add } from "./math"

/* 
* it and test are the same

* ARRANGE, ACT, ASSERT pattern

  arrange - define testing env and values
  act - run the actual code/function that should be tested
  assert - compare the test result to the expected result 

* 

*/

it("should add up all number values in an array", () => {
  // * 1. arrange
  const arr = [1, 2, 3]
  const expected_result = arr.reduce(
    (prevSum, currentNum) => prevSum + currentNum,
    0
  )

  // * 2. act
  const test_result = add(arr)

  // * 3. assert
  expect(test_result).toBe(expected_result)
})

it("should return NaN if at least one invalid number is provided", () => {
  const arr = ["stephen", 2, 3]

  const result = add(arr)

  expect(result).toBeNaN()
})

it("should return a correct sum if an array of numeric string values is provided", () => {
  const arr = ["1", "2", "3"]
  const expected_result = arr.reduce(
    (prevSum, currentNum) => +prevSum + +currentNum,
    0
  )

  const result = add(arr)

  expect(result).toBe(expected_result)
})

it("should return a sum of 0 if an empty array is provided", () => {
  const arr = []

  const result = add(arr)

  expect(result).toBe(0)
})

it("should throw an error if no value is passed", () => {
  const resultHandler = () => {
    add()
  }

  expect(resultHandler).toThrow(/is not iterable/)
})

it("should throw an error if multiple arguments are provided instead of an array", () => {
  const num1 = 1
  const num2 = 2

  const resultHandler = () => {
    add(num1, num2)
  }

  expect(resultHandler).toThrow(/is not iterable/)
})
