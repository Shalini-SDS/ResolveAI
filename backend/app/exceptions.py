class ResolveAIError(Exception):
    """Base exception for ResolveAI."""


class AuthenticationError(ResolveAIError):
    pass


class AuthorizationError(ResolveAIError):
    pass
