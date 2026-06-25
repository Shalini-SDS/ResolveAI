from typing import Any

from app.firebase.client import db
from app.middleware.auth import create_access_token
from app.models.user import User


class AuthService:
    def __init__(self) -> None:
        self.collection = db.collection("users")

    def register(self, payload: dict[str, Any]) -> dict[str, Any]:
        user = User(**payload)
        user_doc = self.collection.document(user.email)
        user_doc.set(user.model_dump())
        token = create_access_token({"sub": user.email, "role": user.role})
        return {"access_token": token, "token_type": "bearer", "user": user.model_dump()}

    def login(self, email: str, password: str) -> dict[str, Any]:
        user_doc = self.collection.document(email).get()
        if not user_doc.exists:
            raise ValueError("User not found")
        user_data = user_doc.to_dict()
        if password != "password":
            raise ValueError("Invalid password")
        token = create_access_token({"sub": email, "role": user_data["role"]})
        return {"access_token": token, "token_type": "bearer", "user": user_data}
