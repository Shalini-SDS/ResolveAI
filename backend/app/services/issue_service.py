from typing import Any


class IssueService:
    def create_issue(self, payload: dict[str, Any]) -> dict[str, Any]:
        return {"message": "Issue created", "issue": payload}

    def list_issues(self) -> list[dict[str, Any]]:
        return []
