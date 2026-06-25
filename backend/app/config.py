import os
from dotenv import load_dotenv

load_dotenv()

PROJECT_NAME = "ResolveAI"

FIREBASE_CREDENTIAL_PATH = os.getenv("FIREBASE_CREDENTIAL_PATH", "")
FIREBASE_PROJECT_ID = os.getenv("FIREBASE_PROJECT_ID", "resolveai")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY", "")
SECRET_KEY = os.getenv("SECRET_KEY", "resolveai-dev-secret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24
