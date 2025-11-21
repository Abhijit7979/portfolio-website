"""
Pydantic Models for Resume Data Structure
Defines data schemas for API validation and serialization
"""
from pydantic import BaseModel
from typing import List, Optional

class Project(BaseModel):
    """Individual project details"""
    title: str
    description: str
    technologies: List[str]
    link: Optional[str] = None  # Live demo URL
    github_link: Optional[str] = None  # GitHub repository URL

class Experience(BaseModel):
    """Work experience entry"""
    company: str
    role: str
    duration: str  # e.g., "Jan 2023 - Present"
    location: str
    description: List[str]  # List of responsibilities/achievements

class Education(BaseModel):
    """Educational background"""
    institution: str
    degree: str
    duration: str
    location: str
    coursework: List[str]  # Relevant courses

class SkillCategory(BaseModel):
    """Skills grouped by category (e.g., Languages, Frameworks, Tools)"""
    category: str
    skills: List[str]

class Resume(BaseModel):
    """Complete resume data structure"""
    name: str
    title: str  # Job title/role
    contact: dict  # Contains email, phone, linkedin, github
    summary: str  # Professional summary
    experience: List[Experience]
    projects: List[Project]
    skills: List[SkillCategory]
    education: List[Education]

