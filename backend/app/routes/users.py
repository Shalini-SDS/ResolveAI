from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("")
def list_users(user=Depends(get_current_user)):
    return {"message": "Users placeholder", "user": user}
