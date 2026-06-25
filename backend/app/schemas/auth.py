from typing import Optional
from pydantic import BaseModel, EmailStr


class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    phone: Optional[str] = None
    role: str = "Citizen"
    language: str = "en"
    theme: str = "light"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict
