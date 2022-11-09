from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

from . import models
from .config import DEBUG
from .db import engine
from .router import api_router, routes

models.Base.metadata.create_all(engine)


def create_app(debug=DEBUG):
    app = FastAPI(debug=debug, routes=routes)
    app.mount("/app/static", StaticFiles(directory="app/static"))
    app.include_router(api_router)

    return app
