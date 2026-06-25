# ResolveAI Backend

This backend provides a modular FastAPI foundation for the ResolveAI platform.

## Run locally

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## API docs

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
