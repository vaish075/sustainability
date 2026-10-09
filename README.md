# SmartBin AI

SmartBin AI is a smart waste-management dashboard for monitoring bin capacity, tracking critical alerts, analyzing waste patterns, and supporting AI-powered sanitation operations.

This project is designed as a city operations dashboard for municipal teams to quickly identify overflowing bins, review live map data, and evaluate waste trends across neighborhoods.

## Features

- Secure admin login screen
- Dashboard overview with key operational metrics
- Live bin map with status markers
- Critical alert cards for bins above threshold
- Route planning view for collection operations
- AI vision interface for waste classification and image review
- Complaints and reporting module
- Analytics section for operational insights

## Technology Stack

- Frontend: React + Vite
- UI: CSS custom styling, Lucide icons
- Maps: Leaflet + React Leaflet
- Charts: Chart.js + react-chartjs-2
- Backend scaffold: Node.js + Express + MySQL

## Project Structure

```text
smartbin-ai/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── server/
│   ├── package.json
│   └── node_modules/
├── README.md
└── package.json
```

## Getting Started

### 1. Install frontend dependencies

```bash
cd smartbin-ai/client
npm install
```

### 2. Start the frontend app

```bash
npm run dev
```

The app will usually run on:

```text
http://localhost:5173
```

### 3. Install backend dependencies (optional scaffold)

```bash
cd ../server
npm install
```

The server folder is prepared as an Express + MySQL backend starter for future integration with the frontend.

## Demo Login

The login page includes a demo-flow interface for testing the prototype. Enter any valid email and password to access the dashboard.

Example:

```text
Email: admin@smartbin.ai
Password: any non-empty value
```

## Usage

After login, the app provides access to the following sections:

- Dashboard
- Live Map
- Routes
- AI Vision
- Complaints
- Analytics

## Notes

This repository currently focuses on the frontend prototype and UI flow. The backend is scaffolded for extension and can be connected to a real database and API layer.

## License

This project is currently for demo and prototype use.
