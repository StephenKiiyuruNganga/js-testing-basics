import { it, expect, describe } from "vitest"
import { cleanNumbers, transformToNumber } from "./numbers"

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1"

    const result = transformToNumber(input)

    expect(result).toBeTypeOf("number")
  })

  it("should yield NaN for non-transformable inputs", () => {
    const input = "stephen"
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN()
    expect(result2).toBeNaN()
  })
})

// * when you test a fn that calls other fns, this is known as an integration test

describe("cleanNumbers()", () => {
  it("should return an array of numbers when an array of string numbers is provided", () => {
    const input = ["1", "2"]

    const result = cleanNumbers(input)

    expect(result[0]).toBeTypeOf("number")
  })

  it("should throw an error if one of the values from the input is an empty string", () => {
    const input = ["", "2"]

    const resultHandler = () => cleanNumbers(input)

    expect(resultHandler).toThrow(/empty/)
  })
})
