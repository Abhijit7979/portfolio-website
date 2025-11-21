from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import router

app = FastAPI(title="Abhijit Portfolio API")

# CORS Configuration
origins = [
    "http://localhost:5173", # Vite local dev
    "http://localhost:3000",
    "https://your-vercel-app.vercel.app", # Replace with actual domain later
    "*" # For now allow all to make it easy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to Abhijit's Portfolio API"}
