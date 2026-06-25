from datetime import datetime
from typing import Optional, Literal
from pydantic import BaseModel, EmailStr

Role = Literal["Citizen", "Officer", "Admin"]
Theme = Literal["light", "dark"]
Language = Literal["en", "ta", "hi"]


class User(BaseModel):
    id: Optional[str] = None
    name: str
    email: EmailStr
    phone: Optional[str] = None
    role: Role = "Citizen"
    language: Language = "en"
    theme: Theme = "light"
    points: int = 0
    badges: list[str] = []
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()
