import { it, expect } from "vitest"
import { transformToNumber } from "./numbers"

it("should transform a string number to a number of type number", () => {
  const input = "1"

  const result = transformToNumber(input)

  expect(result).toBeTypeOf("number")
})

it("should yield NaN for non-transformable inputs", () => {
  const input = "stephen"

  const result = transformToNumber(input)

  expect(result).toBeNaN()
})
