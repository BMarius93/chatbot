```
# Project Setup

This project consists of a backend and a frontend. Follow the instructions below to set up and run both parts of the project.

## Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
```
## Backend Setup

1. Open a terminal and navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the backend server:
   ```sh
   npm start
   ```

## Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server on port 3001:
   ```sh
   PORT=3001 npm start
   ```

## Environment Variables

Make sure to set up the necessary environment variables in a `.env` file in both the `backend` and `frontend` directories. Here are the required variables:

### Backend

Create a `.env` file in the `backend` directory with the following content:
```properties
CORS_ORIGIN=http://localhost:3001
```

### Frontend

Create a `.env` file in the `frontend` directory with the following content:
```properties
REACT_APP_API_ENDPOINT=http://localhost:3000
```

## Running the Project

After setting up both the backend and frontend, you can access the application by opening your browser and navigating to `http://localhost:3001`.

## Troubleshooting

If you encounter any issues, make sure that both the backend and frontend servers are running and that the environment variables are correctly set up.
