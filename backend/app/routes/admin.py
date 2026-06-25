from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("/dashboard")
def admin_dashboard(user=Depends(get_current_user)):
    return {"message": "Admin dashboard placeholder", "user": user}
