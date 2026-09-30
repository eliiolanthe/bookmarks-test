src/services/ – Business Logic Layer
This is where the real work happens. Services contain the business rules, orchestrate calls to one or more models, and handle data transformation.

Services are framework-agnostic. They do not know about req or res.
This makes them easy to unit test without mocking Express internals.
A service can call other services when you need cross-domain logic.
