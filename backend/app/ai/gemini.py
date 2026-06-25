class GeminiService:
    def __init__(self, api_key: str | None = None) -> None:
        self.api_key = api_key

    def analyze_issue(self, payload: dict) -> dict:
        return {
            "category": payload.get("category", "Other"),
            "severity": payload.get("severity", "Medium"),
            "risk_level": "Medium",
            "department": "General",
            "confidence_score": 0.75,
        }
