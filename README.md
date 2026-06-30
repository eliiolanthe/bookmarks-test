# bookmarks-test

A full stack TypeScript app using React (Vite) on the client and Node/Express on the server.

## Project Structure

```
bookmarks-test/
├── client/          # React + Vite + TypeScript frontend
├── server/          # Node + Express + TypeScript backend
├── package.json     # Root package.json with concurrently scripts
└── .gitignore
```

## Getting Started

### Install all dependencies

```bash
npm run install:all
```

### Run in development

```bash
npm run dev
```

This starts both the client and server concurrently:
- **Client:** http://localhost:5173
- **Server:** http://localhost:5000

### Build for production

```bash
npm run build
```

## API

- `GET /api/health` — Health check endpoint
