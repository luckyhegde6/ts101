import { Operation } from "./types.js";

export function calculate({ operator, a, b }: Operation): number {
  switch (operator) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide": 
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    default: 
      throw new Error("Invalid operator");
  }
}
