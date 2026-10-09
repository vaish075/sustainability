# SmartBin AI

Smart waste management for cleaner cities, better routes, and smarter decisions.

SmartBin AI is an intelligent waste-management platform designed to help municipal teams monitor bin health, prioritize collection efforts, and reduce overflow issues through real-time visibility and AI-assisted operations.

## Overview

SmartBin AI brings together monitoring, analytics, and operational workflow management in a single dashboard. It helps cities and waste operators track the condition of public bins, identify hotspots, assess route efficiency, and streamline complaint resolution.

The current prototype focuses on the frontend experience and demonstrates how a municipal operations center can monitor bin capacity, review alerts, and visualize waste activity across neighborhoods.

## Features

- Admin login experience for secure access
- Real-time dashboard for city operations overview
- Live map with bin status markers and fill-level indicators
- Critical alerts for bins needing urgent action
- Route and collection planning workflows
- AI vision module for waste recognition and image-based inspection
- Complaints and issue reporting workflow
- Analytics dashboard for operational performance insights

## Tech Stack

- Frontend: React + Vite
- Styling: CSS modules and custom component styling
- Icons: Lucide React
- Mapping: Leaflet + React Leaflet
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
│   ├── index.html
│   └── README.md
├── server/
│   ├── package.json
│   └── node_modules/
├── package.json
├── README.md
└── .gitignore
```

## Live Demo

The app is designed to run locally in development mode.

```text
Frontend URL: http://localhost:5173
```

A demo preview can be launched with the steps below.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or newer recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/smartbin-ai.git
cd smartbin-ai
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Run the frontend application

```bash
npm run dev
```

Then open the local app in your browser:

```text
http://localhost:5173
```

### 4. Install backend dependencies

The backend is scaffolded for future API and database integration.

```bash
cd ../server
npm install
```

### 5. Run the backend server

Once the backend services are implemented, you can start the server using:

```bash
npm start
```

If the project uses a development runner, this may also be:

```bash
npx nodemon server.js
```

## Environment Setup

If the backend is connected to MySQL or environment-based configuration, add a `.env` file inside the `server` directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=smartbin_ai
```

## Demo Login

The prototype includes a demo authentication flow for easy testing.

Use any valid email and password to sign in:

```text
Email: admin@smartbin.ai
Password: any non-empty value
```

## Main Screens

The application includes the following core sections:

- Dashboard
- Live Map
- Routes
- AI Vision
- Complaints
- Analytics

## Screenshots

A screenshot section can be added here once the project has a final UI build or deployment preview.

```md
![SmartBin AI Dashboard](./docs/screenshots/dashboard.png)
```

## Use Cases

- Monitor municipal waste collection infrastructure
- Detect overflow risks before service disruptions occur
- Improve route optimization for waste collection vehicles
- Review AI-based waste classification and operational metrics
- Track service requests and complaints from the public

## Roadmap

- Integrate live sensor data from smart bins
- Add real-time API connectivity for backend services
- Connect database for persistent reporting and historical trends
- Expand AI models for classification and anomaly detection
- Add authentication, role access, and admin management

## Notes

This repository currently emphasizes the frontend prototype and product experience. The backend is prepared as a development scaffold and can be extended for production integration with real data sources, APIs, and storage.

## License

This project is provided for demo, prototype, and educational use.

## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss the proposed improvement.

## Contact

For project questions or collaboration requests, reach out through the repository owner or project maintainer.
