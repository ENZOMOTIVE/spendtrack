# Spendtrack

> Spendtrack is an AI-assisted workflow project that connects model-powered behavior with application or protocol tooling.

## The Story

Spendtrack starts with a simple goal: bring AI-assisted behavior into a complete product workflow instead of leaving it as a loose experiment. Its shape tells the same story: the product interface, the service layer, and the AI-assisted workflow live close enough together that a maintainer can see the project as a whole before diving into individual folders.

## What It Includes

- A user-facing surface for the product, demo, dashboard, or static experience.
- A service layer for APIs, realtime behavior, bot logic, or server-side workflows.
- AI-assisted behavior through model providers, bot flows, or agent-oriented tooling.

## How It Is Put Together

| Path | Role |
| --- | --- |
| `.gitattributes` | project file or folder |
| `MAO-backend` | service, bot, API, or realtime layer |
| `frontend` | frontend or dashboard application |

## Local Development

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

## Command Surface

| Area | Commands |
| --- | --- |
| `frontend/package.json` | `dev`, `build`, `lint`, `preview` |

## Configuration

- Document API ports, database URLs, third-party credentials, and service endpoints in `.env.example` before deployment.
- Keep model provider keys such as OpenAI or AI SDK credentials in local environment files only.

## Quality Checks

- From `frontend`, run `npm run lint`.
- From `frontend`, run `npm run build`.

## Where To Take It Next

- Add screenshots or a short user flow so visitors can see the interface before running it.
- Document the main API routes, bot events, or service responsibilities with example inputs and outputs.
- Describe the model provider, prompt boundaries, and evaluation approach for the AI-assisted parts.
- Keep setup commands current whenever dependencies, scripts, or deployment targets change.
- Record important product decisions here so the repository keeps its story as the code evolves.

## Project Metadata

| Field | Details |
| --- | --- |
| Repository | `ENZOMOTIVE/spendtrack` |
| Categories | `Agentic AI`, `Full Stack` |
| Primary stack | Next.js, React, Vite, Express, Node.js, TypeScript, JavaScript, HTML, CSS |


## License

No license file is currently committed. Add one before distributing this project publicly.
