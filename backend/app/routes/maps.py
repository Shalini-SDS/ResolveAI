from fastapi import APIRouter, Depends, Query

from app.middleware.auth import get_current_user

router = APIRouter()


@router.get("/nearby")
def nearby_issues(lat: float, lon: float, radius: int = Query(5), user=Depends(get_current_user)):
    return {"message": "Nearby issues placeholder", "latitude": lat, "longitude": lon, "radius": radius, "user": user}


@router.get("/heatmap")
def heatmap(user=Depends(get_current_user)):
    return {"message": "Heatmap placeholder", "user": user}
