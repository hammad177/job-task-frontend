# Job Queue Dashboard

Welcome to the **Job Queue Dashboard**! This is a web application where users can monitor job statuses in real-time and view random food images fetched from Unsplash. Users can also create new jobs and track their progress until resolution. The application is developed using **React**, **Tailwind CSS**, and **shadcn** for building responsive and modern UI components.

## Key Features

- **View Jobs**: Displays a list of jobs along with their current status (pending, resolved, failed).
- **Create Jobs**: Allows users to create new jobs that fetch random food images from Unsplash.
- **Real-time Updates**: Job statuses are updated automatically via Server-Sent Events (SSE).
- **Responsive Design**: Uses Tailwind CSS to ensure a fully responsive and mobile-friendly interface.

## Tech Stack

- **React**: Core JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn**: Component library for reusable UI elements.
- **Node Fetch**: For making HTTP requests to the backend.
- **SSE (Server-Sent Events)**: Real-time updates from the backend about job status changes.

## Folder Structure

The project is organized as follows:

```bash
.
├── assets/
│   └── # Stores static assets such as images.
│
├── components/
│   ├── # Contains reusable React components.
│   └── ui/
│       └── # Core shadcn UI components like buttons, modals, etc.
│
├── constants/
│   └── # Defines application-wide constants and configuration variables.
│
├── hooks/
│   └── # Contains custom React hooks (e.g., to fetch job data or handle SSE).
│
├── service/
│   └── # Handles HTTP API integration with the backend (get jobs, get job by ID, create job).
│
└── App.tsx
    └── # Main application component where all implementation logic is executed.
```

### Description of Key Folders:

- **assets**: Stores static images and other assets required by the app.
- **components**: Houses reusable React components that make up the UI. The `ui` folder within contains core components from **shadcn** for consistent and polished UI elements.
- **constants**: Holds global constants and configuration values used throughout the application.
- **hooks**: Custom React hooks are defined here to fetch job data and handle real-time updates via **SSE**.
- **service**: All HTTP API interactions with the backend (e.g., creating jobs, fetching job data) are handled here using **Node Fetch**.

### Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** for package management

### Installation

Follow the steps below to get the project up and running:

1. Clone the repository:
   ```bash
   git clone https://github.com/hammad177/calo-task-frontend.git
   cd calo-task-frontend
   ```
2. Install dependencies:
   ```bash
    npm install
    # or
    yarn install
   ```
3. Start the development server:
   ```bash
    npm run dev
    # or
    yarn dev
   ```
4. Open the app in the browser:
   ```bash
    http://localhost:3000
   ```

### Usage

1. **Creating Jobs:** You can create new jobs using the "Add Job" button on the dashboard.
2. **Monitoring Job Status:** The dashboard will display the status of each job in real-time, updating as jobs move from pending to resolved or failed.
3. **Real-time Updates:** The app uses **Server-Sent Events (SSE)** to receive updates about job statuses from the backend.

### API Integration

The frontend interacts with the backend through a set of API endpoints:

1. **Create a Job:** Sends a request to create a new job.
2. **Get All Jobs:** Fetches the list of all jobs and their statuses.
3. **Get Job by ID:** Retrieves detailed information about a specific job by its ID.

All API interactions are managed in the `/service` folder using Node Fetch.
