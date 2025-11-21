# S. Abhijit Rao - Personal Portfolio

A production-ready personal portfolio website built with React.js (Frontend) and FastAPI (Backend).

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion, Vite
- **Backend:** FastAPI, Pydantic, Uvicorn
- **Deployment:** Vercel (Frontend), Docker/Render (Backend)

## Project Structure

```
/backend
  /app          # FastAPI application code
  /tests        # Unit tests
  Dockerfile    # Backend containerization
  requirements.txt
/frontend
  /src          # React source code
  package.json  # Frontend dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python (v3.11+)
- Docker (optional)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the server:
   ```bash
   uvicorn app.main:app --reload
   ```
   The API will be available at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (or rename `.env.example` if available) and set the API URL:
   ```
   VITE_API_URL=http://localhost:8000/api
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Deployment

### Frontend (Vercel)
1. Push the code to GitHub.
2. Import the project in Vercel.
3. Set the Root Directory to `frontend`.
4. Add Environment Variable `VITE_API_URL` pointing to your deployed backend URL.
5. Deploy.

### Backend (Render/Railway/Fly)
1. The backend includes a `Dockerfile`.
2. Deploy using the Dockerfile on your preferred platform.
3. Ensure the `resume.pdf` is present in the build context (it is copied in the Dockerfile).

## Features
- **Resume Extraction:** Content is structured from the original PDF.
- **PDF Download:** Serves the original resume PDF.
- **Responsive Design:** Fully responsive UI with Tailwind CSS.
- **Dark Mode:** Toggle between light and dark themes.
- **Animations:** Smooth transitions using Framer Motion.
- **Contact Form:** Functional contact form endpoint.
