from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("")
def leaderboard(user=Depends(get_current_user)):
    return {"message": "Leaderboard placeholder", "user": user}
