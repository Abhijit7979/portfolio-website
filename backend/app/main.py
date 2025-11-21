"""
FastAPI Backend for Portfolio Website
Main application configuration with CORS and routing
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import router

# Initialize FastAPI application
app = FastAPI(title="Abhijit Portfolio API")

# CORS Configuration - Allow frontend to access backend
origins = [
    "http://localhost:5173",  # Vite local development
    "http://localhost:3000",  # Alternative React dev server
    "https://your-vercel-app.vercel.app",  # Production frontend (update this)
    "*"  # Allow all origins for development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include API routes with /api prefix
app.include_router(router, prefix="/api")

# Root endpoint - health check
@app.get("/")
async def root():
    return {"message": "Welcome to Abhijit's Portfolio API"}

