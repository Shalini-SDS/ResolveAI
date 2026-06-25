from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("")
def list_officers(user=Depends(get_current_user)):
    return {"message": "Officers placeholder", "user": user}
