from fastapi import APIRouter, Depends

from app.controllers.auth_controller import AuthController
from app.middleware.auth import get_current_user
from app.schemas.auth import LoginRequest, RegisterRequest

router = APIRouter()
controller = AuthController()


@router.post("/register")
def register(payload: RegisterRequest):
    return controller.register(payload)


@router.post("/login")
def login(payload: LoginRequest):
    return controller.login(payload)


@router.get("/me")
def me(user=Depends(get_current_user)):
    return {"user": user}
