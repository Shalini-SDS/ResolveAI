from fastapi import APIRouter, Depends, HTTPException, status

from app.controllers.auth_controller import AuthController
from app.middleware.auth import get_current_user
from app.schemas.issue import IssueCreate, IssueUpdate
from app.services.auth_service import AuthService

router = APIRouter()


@router.get("")
def list_issues(user=Depends(get_current_user)):
    return {"message": "Issue list placeholder", "user": user}


@router.post("")
def create_issue(payload: IssueCreate, user=Depends(get_current_user)):
    return {
        "message": "Issue created",
        "payload": payload.model_dump(),
        "user": user,
    }


@router.get("/{issue_id}")
def get_issue(issue_id: str, user=Depends(get_current_user)):
    return {"message": f"Issue {issue_id}", "user": user}
