from datetime import datetime
from typing import Optional, Literal
from pydantic import BaseModel

NotificationType = Literal["issue_created", "issue_verified", "issue_assigned", "issue_resolved", "verification_request"]


class Notification(BaseModel):
    id: Optional[str] = None
    user_id: str
    title: str
    message: str
    type: NotificationType
    read: bool = False
    created_at: datetime = datetime.utcnow()
