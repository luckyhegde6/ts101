export type Operator = 'add' | 'subtract' | 'multiply' | 'divide';

export interface Operation {
  operator: Operator;
  a: number;
  b: number;
}
