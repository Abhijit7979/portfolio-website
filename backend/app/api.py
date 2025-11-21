"""
API Routes for Portfolio Backend
Endpoints: resume data, projects list, PDF download
"""
from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from .models import Resume, Project
from .data import resume_data
import os

router = APIRouter()

@router.get("/resume", response_model=Resume)
async def get_resume():
    """
    Get complete resume data including personal info, experience, projects, skills, education
    Returns: JSON object with all resume information
    """
    return resume_data

@router.get("/resume/pdf")
async def get_resume_pdf():
    """
    Download resume as PDF file
    Returns: PDF file for download
    """
    file_path = "app/resume.pdf"
    if not os.path.exists(file_path):
        # Fallback for local development if running from backend directory
        file_path = "resume.pdf"
    
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Resume PDF not found")
          
    return FileResponse(
        file_path, 
        media_type="application/pdf", 
        filename="Aiden_ai_abhijit.pdf"
    )

@router.get("/projects", response_model=list[Project])
async def get_projects():
    """
    Get list of all projects
    Returns: Array of project objects
    """
    return resume_data.projects

