from fastapi import HTTPException, status

from app.schemas.auth import LoginRequest, RegisterRequest
from app.services.auth_service import AuthService


class AuthController:
    def __init__(self) -> None:
        self.service = AuthService()

    def register(self, payload: RegisterRequest) -> dict:
        try:
            return self.service.register(payload.model_dump())
        except Exception as exc:  # pragma: no cover - simple wrapper
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc

    def login(self, payload: LoginRequest) -> dict:
        try:
            return self.service.login(payload.email, payload.password)
        except ValueError as exc:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(exc)) from exc
