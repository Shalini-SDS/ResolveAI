from pydantic import BaseModel


class VerificationCreate(BaseModel):
    issue_id: str
    vote_type: str
