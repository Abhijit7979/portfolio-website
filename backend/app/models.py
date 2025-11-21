from pydantic import BaseModel, EmailStr
from typing import List, Optional

class Project(BaseModel):
    title: str
    description: str
    technologies: List[str]
    link: Optional[str] = None
    github_link: Optional[str] = None

class Experience(BaseModel):
    company: str
    role: str
    duration: str
    location: str
    description: List[str]

class Education(BaseModel):
    institution: str
    degree: str
    duration: str
    location: str
    coursework: List[str]

class SkillCategory(BaseModel):
    category: str
    skills: List[str]

class Resume(BaseModel):
    name: str
    title: str
    contact: dict
    summary: str
    experience: List[Experience]
    projects: List[Project]
    skills: List[SkillCategory]
    education: List[Education]

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
