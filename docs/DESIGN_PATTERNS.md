# Design Patterns — ts101: TypeSafe Calculator

## Patterns Used

### 1. Module / Separation of Concerns

Three separate files with distinct responsibilities:

```
types.ts        → Data contracts (interfaces, type aliases)
calculator.ts   → Pure business logic
index.ts        → I/O (CLI input/output)
```

### 2. Pure Function

```typescript
export function calculate({ operator, a, b }: Operation): number
```

- Same inputs always produce same outputs
- No side effects — easy to test

### 3. Defensive Programming

- Division by zero throws descriptive error
- Invalid operator throws descriptive error
- Switch exhaustiveness covers all union members

## Why These Patterns?

- **Testability**: Pure functions are trivially unit-testable
- **Maintainability**: Add new operators by extending the union type + switch case
- **Simplicity**: No unnecessary abstractions for a weekend project

## Evolution Path

In ts102+, these patterns evolve into:
- Service Layer (ts102)
- Repository Pattern (ts107)
- Clean Architecture (ts107)
