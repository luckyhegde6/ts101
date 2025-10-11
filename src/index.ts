import readline from "readline";
import { calculate } from "./calculator.js";
import { Operator } from "./types.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  const operator = await askQuestion("Enter operation (add, subtract, multiply, divide): ") as Operator;
  const a = Number(await askQuestion("Enter first number: "));
  const b = Number(await askQuestion("Enter second number: "));

  try {
    const result = calculate({ operator, a, b });
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  } finally {
    rl.close();
  }
}

main();
