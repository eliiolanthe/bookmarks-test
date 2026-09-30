# Controllers

Place your Express route controllers here.

A controller receives the incoming request, extracts the data it needs, passes that data to a service, and sends back the response. It should not contain business logic or direct database calls.

Rule of thumb: If you see a database query or a complex conditional inside a controller, move it to the service layer.
