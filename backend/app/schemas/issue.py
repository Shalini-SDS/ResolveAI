from typing import Optional
from pydantic import BaseModel, Field


class IssueCreate(BaseModel):
    title: str = Field(..., min_length=3)
    description: str = Field(..., min_length=3)
    category: Optional[str] = None
    severity: Optional[str] = None
    department: Optional[str] = None
    location: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    images: list[str] = []
    videos: list[str] = []
    voice_recording: Optional[str] = None
    transcript: Optional[str] = None


class IssueUpdate(BaseModel):
    status: Optional[str] = None
    department: Optional[str] = None
    assigned_to: Optional[str] = None
    notes: Optional[str] = None
