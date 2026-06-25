from datetime import datetime
from typing import Optional, Literal
from pydantic import BaseModel

VoteType = Literal["verify", "reject", "duplicate"]


class Verification(BaseModel):
    id: Optional[str] = None
    issue_id: str
    user_id: str
    vote_type: VoteType
    created_at: datetime = datetime.utcnow()
