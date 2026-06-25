from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user
from app.schemas.verification import VerificationCreate

router = APIRouter()


@router.post("")
def create_verification(payload: VerificationCreate, user=Depends(get_current_user)):
    return {"message": "Verification recorded", "payload": payload.model_dump(), "user": user}
