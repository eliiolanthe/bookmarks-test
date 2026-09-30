src/middleware/ – Reusable Request Pipeline Functions
Middleware intercepts requests before they reach a controller or responses before they leave. Common middleware includes:

File Purpose
auth.js Verifies JWTs or session tokens and attaches user data to the request
validate.js Generic validation middleware factory (wraps Zod, Joi, etc.)
errorHandler.js Global error handler that formats error responses consistently
rateLimiter.js Throttles requests to prevent abuse
