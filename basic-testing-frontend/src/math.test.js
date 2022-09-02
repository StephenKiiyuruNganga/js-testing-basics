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
