from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.post("/categorize")
def categorize(payload: dict, user=Depends(get_current_user)):
    return {"message": "AI categorization placeholder", "payload": payload, "user": user}


@router.post("/insights")
def insights(payload: dict, user=Depends(get_current_user)):
    return {"message": "AI insights placeholder", "payload": payload, "user": user}
