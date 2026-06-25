from fastapi import Request
from fastapi.responses import JSONResponse

from app.exceptions import AuthenticationError, AuthorizationError, ResolveAIError


async def resolveai_exception_handler(request: Request, exc: ResolveAIError):
    return JSONResponse(status_code=400, content={"detail": str(exc)})


async def auth_exception_handler(request: Request, exc: AuthenticationError):
    return JSONResponse(status_code=401, content={"detail": str(exc)})


async def authorization_exception_handler(request: Request, exc: AuthorizationError):
    return JSONResponse(status_code=403, content={"detail": str(exc)})
