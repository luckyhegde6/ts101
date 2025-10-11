# Interview Questions – Week 1 Topics

### 1. What is TypeScript and how is it different from JavaScript?
TypeScript adds static types and compile-time checking to JavaScript.

### 2. What’s the purpose of `tsconfig.json`?
It configures compiler behavior (target, module system, etc.).

### 3. How do interfaces differ from types?
Interfaces describe object shapes, while types can alias unions, primitives, and intersections.

### 4. Explain the concept of union types.
Union types allow a variable to have multiple possible types.

### 5. What’s the role of the compiler in TypeScript?
To check types and transpile `.ts` to `.js`.

---

### System Design Angle (HLD/LLD)
- **LLD:** Calculator follows SRP (Single Responsibility Principle).  
  Each module (`types`, `calculator`, `index`) handles one concern.
- **HLD:** Simple flow from CLI → Validation → Compute → Output.
  Could scale into an API service later (add REST endpoints for calculations).