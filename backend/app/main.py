from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.exceptions import AuthenticationError, AuthorizationError, ResolveAIError
from app.handlers import (
    auth_exception_handler,
    authorization_exception_handler,
    resolveai_exception_handler,
)
from app.routes.auth import router as auth_router
from app.routes.issues import router as issues_router
from app.routes.users import router as users_router
from app.routes.verifications import router as verifications_router
from app.routes.notifications import router as notifications_router
from app.routes.maps import router as maps_router
from app.routes.officers import router as officers_router
from app.routes.admin import router as admin_router
from app.routes.analytics import router as analytics_router
from app.routes.chatbot import router as chatbot_router
from app.routes.leaderboard import router as leaderboard_router
from app.routes.ai import router as ai_router
from app.websocket.manager import router as websocket_router

app = FastAPI(
    title="ResolveAI API",
    description="AI-powered civic issue reporting and resolution platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(users_router, prefix="/users", tags=["users"])
app.include_router(issues_router, prefix="/issues", tags=["issues"])
app.include_router(verifications_router, prefix="/verifications", tags=["verifications"])
app.include_router(notifications_router, prefix="/notifications", tags=["notifications"])
app.include_router(maps_router, prefix="/maps", tags=["maps"])
app.include_router(officers_router, prefix="/officers", tags=["officers"])
app.include_router(admin_router, prefix="/admin", tags=["admin"])
app.include_router(analytics_router, prefix="/analytics", tags=["analytics"])
app.include_router(chatbot_router, prefix="/chatbot", tags=["chatbot"])
app.include_router(leaderboard_router, prefix="/leaderboard", tags=["leaderboard"])
app.include_router(ai_router, prefix="/ai", tags=["ai"])
app.include_router(websocket_router, prefix="/ws", tags=["websocket"])

app.add_exception_handler(ResolveAIError, resolveai_exception_handler)
app.add_exception_handler(AuthenticationError, auth_exception_handler)
app.add_exception_handler(AuthorizationError, authorization_exception_handler)


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ResolveAI"}
