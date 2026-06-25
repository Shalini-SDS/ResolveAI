from app.services.issue_service import IssueService


class IssueController:
    def __init__(self) -> None:
        self.service = IssueService()

    def create_issue(self, payload: dict) -> dict:
        return self.service.create_issue(payload)

    def list_issues(self) -> list[dict]:
        return self.service.list_issues()
