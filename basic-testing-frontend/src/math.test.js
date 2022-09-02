import { expect, it, test } from "vitest"
import { add } from "./math"

// * it and test are the same

it("should add up all number values in an array", () => {
  // * 1. your unit
  const result = add([1, 2, 3])

  // * 2. the answer
  expect(result).toBe(6)
})
