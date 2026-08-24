// Logic for user authentication (login, register) should be in authController.ts
// POST /auth/register  →  hash password (bcrypt)  →  save user
// POST /auth/login     →  verify password  →  return JWT

// The JWT gets stored in an httpOnly cookie (safer than localStorage),
// and your auth.ts middleware on the server verifies it on every protected route.
// On the React side, Zustand holds the auth state in memory, and TanStack Query handles the rest.