# Design Overview

## High-Level Design (HLD)
- Input → Validation → Calculation → Output.
- Could be extended to microservice (REST/GraphQL API).

## Low-Level Design (LLD)
- **types.ts** defines contracts.
- **calculator.ts** contains core logic.
- **index.ts** manages CLI interaction.

## Future Extensions
- Add logging.
- Add history storage (JSON file or DB).
- Add async REST API layer using Express + TS.
