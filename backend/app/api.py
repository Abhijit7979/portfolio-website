from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from .models import Resume, ContactMessage, Project
from .data import resume_data
import os

router = APIRouter()

@router.get("/resume", response_model=Resume)
async def get_resume():
    return resume_data

@router.get("/resume/pdf")
async def get_resume_pdf():
    file_path = "app/resume.pdf"
    if not os.path.exists(file_path):
        # Fallback for local dev if running from backend dir
        file_path = "resume.pdf"
    
    if not os.path.exists(file_path):
         raise HTTPException(status_code=404, detail="Resume PDF not found")
         
    return FileResponse(file_path, media_type="application/pdf", filename="Aiden_ai_abhijit.pdf")

@router.get("/projects", response_model=list[Project])
async def get_projects():
    return resume_data.projects

@router.post("/contact")
async def send_contact(message: ContactMessage):
    # In a real app, send email here.
    # For now, we just log it.
    print(f"Received message from {message.name} ({message.email}): {message.message}")
    return {"status": "success", "message": "Message received"}
