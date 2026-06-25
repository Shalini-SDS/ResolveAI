from fastapi import APIRouter, Depends

from app.middleware.auth import get_current_user

router = APIRouter()


@router.post("")
def chatbot(query: str, user=Depends(get_current_user)):
    return {"message": "Chatbot placeholder", "query": query, "user": user}
