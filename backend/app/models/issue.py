from datetime import datetime
from typing import Optional, Literal
from pydantic import BaseModel

Status = Literal["Reported", "Verified", "Assigned", "In Progress", "Resolved", "Closed"]
Severity = Literal["Low", "Medium", "High", "Critical"]
Category = Literal[
    "Pothole",
    "Road Damage",
    "Water Leakage",
    "Streetlight Issue",
    "Garbage",
    "Drainage Issue",
    "Public Safety",
    "Other",
]


class Issue(BaseModel):
    id: Optional[str] = None
    issue_id: Optional[str] = None
    title: str
    description: str
    category: Category = "Other"
    severity: Severity = "Medium"
    status: Status = "Reported"
    department: Optional[str] = None
    location: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    images: list[str] = []
    videos: list[str] = []
    voice_recording: Optional[str] = None
    reporter_id: str
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()
    transcript: Optional[str] = None
    ai_summary: Optional[str] = None
