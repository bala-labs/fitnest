# FitNest (React + FastAPI) 🏋️‍♂️

This repo was rebuilt from scratch into:
- `frontend/` — React (Vite) SPA with modern UI + light/dark mode
- `backend/` — FastAPI API with SQLite persistence

## Pages (React)
- `/` — Home (hero slider + CTAs)
- `/services` — Services (modern service cards + Join links)
- `/about` — About
- `/classes` — Classes (filter + class cards + Join links)
- `/contact` — Contact (info cards + embedded map)
- `/join` — Join form (validation + API submit + success modal)

## Backend API (FastAPI)
Base URL: `http://localhost:8000`

### `GET /users`
Returns saved submissions from SQLite.

### `POST /users`
Creates a new submission (used by the Join form).

**Request JSON body**
- `id` (optional): UUID string; the UI generates it as `crypto.randomUUID()`
- `name` (required): no digits allowed
- `email` (required): valid email format
- `service` (required): one of the service strings from the UI
- `phone` (required): exactly 10 digits
- `city` (required): no digits allowed

**Response**
- A created user record (including `created_at`).

## Theme (Light/Dark)
The UI uses `frontend/src/modern.css` with CSS variables controlled by:
- `html[data-theme="light" | "dark"]`
- Toggle button in the header (persisted to `localStorage` as `fitnest-theme`)

## How to Run Locally

### 1) Start backend
```powershell
cd "C:\Users\infin\Repo\Projects\fitnest\backend"
venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --port 8000
```

The SQLite DB will be created at:
- `backend/data/fitnest.sqlite3`

### 2) Start frontend
```powershell
cd "C:\Users\infin\Repo\Projects\fitnest\frontend"
npm run dev
```

## Notes
- Join form behavior: shows errors inline; shows the success modal **only after** FastAPI returns success.
- Contact link was removed from the header/nav to keep the footer as the main contact surface.
