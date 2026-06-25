from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("")
def list_notifications(user=Depends(get_current_user)):
    return {"message": "Notifications placeholder", "user": user}
