import { calculate } from '../src/calculator';
import { Operation } from '../src/types';

describe('calculate', () => {
  it('should add two numbers', () => {
    const operation: Operation = { operator: 'add', a: 2, b: 3 };
    const result = calculate(operation);
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const operation: Operation = { operator: 'subtract', a: 5, b: 3 };
    const result = calculate(operation);
    expect(result).toBe(2);
  });

  it('should multiply two numbers', () => {
    const operation: Operation = { operator: 'multiply', a: 2, b: 3 };
    const result = calculate(operation);
    expect(result).toBe(6);
  });

  it('should divide two numbers', () => {
    const operation: Operation = { operator: 'divide', a: 6, b: 3 };
    const result = calculate(operation);
    expect(result).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    const operation: Operation = { operator: 'divide', a: 6, b: 0 };
    expect(() => calculate(operation)).toThrow("Cannot divide by zero");
  });

  it('should throw an error for an invalid operator', () => {
    const operation: Operation = { operator: 'invalid' as any, a: 1, b: 2 };
    expect(() => calculate(operation)).toThrow("Invalid operator");
  });
});
