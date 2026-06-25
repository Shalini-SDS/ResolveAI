from pydantic import BaseModel


class NotificationRead(BaseModel):
    notification_id: str
