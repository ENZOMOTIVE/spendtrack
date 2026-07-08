# Spendtrack

`spendtrack` is a Next.js application. The repository contains route files, UI components, and package scripts for local development and production builds.

## Features

- Application routes/pages and reusable React components
- Frontend build configuration for a modern web app
- Backend entry point for API or server-side workflows

## Tech Stack

- Next.js
- React
- TypeScript/JavaScript
- Express/Node backend

## Project Structure

- `.gitattributes` - project file
- `MAO-backend` - project directory
- `README.md` - project documentation
- `frontend` - frontend application code

## Getting Started

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/ENZOMOTIVE/spendtrack.git
cd spendtrack
```

```bash
cd MAO-backend
npm install
```

```bash
cd frontend
npm install
npm run dev
```

## Available Commands

- `MAO-backend/package.json` - no npm scripts are currently defined.
- `frontend/package.json` - scripts: `dev`, `build`, `lint`, `preview`

## Configuration

- Create a local `.env` file for secrets, API keys, RPC URLs, private keys, bot tokens, or database credentials.
- Keep `.env` files out of version control and document required variable names as the project stabilizes.

## Testing and Quality

- From `frontend`, run `npm run lint`.
- From `frontend`, run `npm run build`.

## Roadmap

- Keep setup instructions aligned with the actual project workflow.
- Add screenshots, architecture notes, or API examples as the implementation grows.
- Document deployment steps once the hosting target is finalized.

## Contributing

1. Create a feature branch.
2. Make focused changes and update documentation when behavior changes.
3. Run the relevant checks before opening a pull request.

## License

No license file is currently included. Add one before distributing or reusing this project publicly.
